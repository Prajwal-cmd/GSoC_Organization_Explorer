import { Organisation } from "../models/organisations.model.js";
import axios from 'axios';


export const updateDB =async (req, res) => {
    try {
        const response = await axios.get(`${process.env.API}`);
        const organizations = response.data;

        
        for (let i = 0; i < organizations.length; i++) {
            const orgData = organizations[i];
            await Organisation.findOneAndUpdate({ name: orgData.name }, orgData, { upsert: true });
            console.log('Organization updated successfully:', orgData.name);
        }

        res.status(200).send('Organizations updated successfully');
    } catch (error) {
        console.error('Error updating organizations:', error);
        res.status(500).send('Error updating organizations');
    }
}