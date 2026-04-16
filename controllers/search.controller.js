import prisma from "../lib/prisma.js";
/**
 * /search?manufacturer=Volkswagen&model=Polo&year=2020&issue=brake
 */
export const searchCore = async (req, res) => {
    const { manufacturer, modelVariant, issue } = req.query;

    try {
        const results = await prisma.tutorial.findMany({
            where: {
                // Filter by model + manufacturer
                model: {
                    modelVariant: {
                        equals: modelVariant,
                        mode: "insensitive",
                    },

                    manufacturer: manufacturer
                        ? {
                            name: {
                                equals: manufacturer,
                                mode: "insensitive",
                            },
                        }
                        : undefined,
                },

                OR: issue
                    ? [
                        {
                            title: {
                                contains: issue,
                                mode: "insensitive",
                            },
                        },
                        {
                            category: {
                                name: {
                                    contains: issue,
                                    mode: "insensitive",
                                },
                            },
                        },
                    ]
                    : undefined,
            },
            include: {
                model: {
                    include: {
                        manufacturer: true,
                    },
                },
                category: true,
            },
        });

        res.status(200).json({
            success: true,
            count: results.length,
            data: results,
        });
    } catch (error) {
        console.error("Search error:", error);

        res.status(500).json({
            success: false,
            message: "Search failed",
        });
    }
};
