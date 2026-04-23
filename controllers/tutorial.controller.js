import prisma from '../lib/prisma.js';

/**
 * /tutorials/:tutorialId/:model/:slug
 */
const getAllModelTutorials = async (req, res) => {
    const { tutorialId, model, slug } = req.params;
    const parsedTutorialId = parseInt(tutorialId, 10);

    //check if tutorialId is a valid number
    if (Number.isNaN(parsedTutorialId)) {
        return res.status(400).json({
            success: false,
            message: 'Invalid tutorial ID',
        });
    }

    try {
        const tutorial = await prisma.tutorial.findFirst({
            // Find the tutorial with the matching ID, slug, and model name 
            where: {
                id: parsedTutorialId,
                slug: {
                    equals: slug,
                    mode: 'insensitive',
                },
                model: {
                    name: {
                        equals: model,
                        mode: 'insensitive',
                    },
                },
            },
            //include the model and manufacturer details in the response data object
            include: {
                model: {
                    include: {
                        manufacturer: true,
                    },
                },
                category: true,
            },
        });
        
        if (!tutorial) {
            return res.status(404).json({
                success: false,
                message: 'Tutorial not found',
            });
        }

        res.status(200).json({
            success: true,
            data: tutorial,
        });
    } catch (error) {
        console.error('Error fetching tutorials:', error);

        res.status(500).json({
            success: false,
            message: 'Server error',
        });
    }
};

export default getAllModelTutorials;
