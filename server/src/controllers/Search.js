import { Organisation } from "../models/organisations.model.js";


export const search = async (req, res) => {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 20;
    const year = req.query.year;
    const search = decodeURIComponent(req.query.search) || '';

    // Define the base filter
    const filter = {};

    // If a year is selected, add the year condition to the filter
    if (year && year!='All') {
        filter[`years.${year}.projects`] = { $exists: true, $not: { $size: 0 } };
    }

    // Define the search query for various fields
    const searchFilter = {
        $or: [
            { name: { $regex: `.*${search}.*`, $options: 'i' } },
            { category: { $regex: `.*${search}.*`, $options: 'i' } },
            { topics: { $regex: `.*${search}.*`, $options: 'i' } },
            { technologies: { $regex: `.*${search}.*`, $options: 'i' } },
            // Add other fields here for searching
        ],
    };

    // If search query is provided, merge it with the base filter
    if (search) {
        Object.assign(filter, searchFilter);
    }

    try {
        const totalCount = year ? await Organisation.countDocuments(filter) : await Organisation.countDocuments(searchFilter);
        const totalPages = Math.ceil(totalCount / limit);
        const skipCount = (page - 1) * limit;

        const results = await Organisation.find(filter).limit(limit).skip(skipCount);

        const prevPage = page > 1 ? page - 1 : null;
        const nextPage = page < totalPages ? page + 1 : null;

        const pagination = {
            totalPages,
            currentPage: page,
            prevPage: prevPage ? prevPage : null,
            nextPage: nextPage ? nextPage : null
        };

        res.status(200).json({ organizations: results, pagination });
    } catch (error) {
        console.error('Error searching organizations:', error);
        res.status(500).json({ error: 'An error occurred while searching organizations' });
    }
}