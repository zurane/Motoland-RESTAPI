
import prisma from '../lib/prisma.js';
// *Returns all models for a specific manufacturer
const getManufacturerModels = async (req, res) => {
    const { name } = req.params;
    try {
        const models = await prisma.vehicleModel.findMany({
            // find all vehicles manufactured by the provided manufacturer name
            where: {
                manufacturer: {
                    name: {
                        equals: name,
                        mode: 'insensitive' // Allows all cases VW, vw
                    }
                }
            },
            include: {
                manufacturer: true
            }
        });

        console.table(models);

        res.status(200).json({
            success: true,
            count: models.length,
            data: models
        });



    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Server error'
        });
    }
};

export default getManufacturerModels;