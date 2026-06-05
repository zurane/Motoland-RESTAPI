import prisma from '../lib/prisma.js';
import { algoliasearch } from 'algoliasearch';
import dotenv from "dotenv";

dotenv.config();


const client = algoliasearch(
    process.env.ALGOLIA_APP_ID,
    process.env.ALGOLIA_ADMIN_KEY,
);


async function syncAlgolia() {

    console.log("Starting Algolia synchronization...");
    const tutorials = await prisma.tutorial.findMany({
        include: {
            category: true,
            model: { 
                include: {
                    manufacturer: true,
                }
            }
        },
    });

    console.log(`found ${tutorials.length} tutorials to synchronize with Algolia.`);

    const algoliaRecords = tutorials.map((tutorial) => ({
        objectID: tutorial.id,
        title: tutorial.title,
        difficulty: tutorial.difficulty,
        estimatedTime: tutorial.estimatedTimeMinutes,
        description: tutorial.description,
        category: tutorial.category?.name,
        make: tutorial.model?.manufacturer?.name || "Unknown",
        model: tutorial.model?.name || "Unknown",
    }));

    try {
        console.log("Uploading records to Algolia...");

        await client.saveObjects({
            indexName: "motokare_tutorials",
            objects: algoliaRecords,
        });

        console.log("Successfully synchronized with Algolia!");
    } catch (error) {
        console.error("Error occurred while uploading records to Algolia:", error);
    }
}

syncAlgolia();