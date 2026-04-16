import prisma from '../lib/prisma.js';


const getCategories = async (req, res) => {
    try {
        const categories = await prisma.category.findMany({
            include: {
                tutorials: {
                    include: {
                        model: {
                            include: {
                                manufacturer: true
                            }
                        }
                    }
                }
            }
        })
        res.status(200).json(categories);
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({ error: 'Failed to fetch categories' });
    }
}

export default getCategories;