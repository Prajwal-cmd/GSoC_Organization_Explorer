import { Organisation } from "../models/organisations.model.js"

export const detail = async (req, res) => {
    const id = req.query.id;
    
    try {
        const data = await Organisation.findById(id);
        if (!data) {
            return res.status(404).json({ error: 'Organization not found' });
        }
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching organization details:', error);
        res.status(500).json({ error: 'An error occurred while fetching organization details' });
    }
}
