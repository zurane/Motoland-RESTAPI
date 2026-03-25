import prisma from '../lib/prisma.js';
//  * Returns all tutorials for a specific vehicle model
const getTutorialsByModel = async (req, res) => {
    const { id } = req.params;
    try {
        const tutorials = await prisma.tutorial.findMany({
            where: {
                modelId: parseInt(id),
            },
            include: {
                model: {
                    include: {
                        manufacturer: true, // include manufacturer info
                    },
                },
                category: true, // include category (oil, brakes, etc.)
            },
        });

        res.status(200).json({
            success: true,
            count: tutorials.length,
            data: tutorials,
        });
    } catch (error) {
        console.error('Error fetching tutorials:', error);

        res.status(500).json({
            success: false,
            message: 'Server error',
        });
    }
};

export default getTutorialsByModel;