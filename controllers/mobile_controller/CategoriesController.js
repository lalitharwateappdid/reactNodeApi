const db = require("../../database/database");
const Category = require("../../models/CategoryModel");
const Subcategory = require("../../models/SubCategoryModel");

const fetchCategoriesRecursively = async (categories, depth) => {
    if (!Array.isArray(categories)) {
        categories = [categories];
    }

    for (let category of categories) {
        // Fetch related categories only once (one level deep)
        const relatedCategories = await category.getRelatedCategories();

        // Ensure relatedCategories is an array and set default empty array if no children
        category.dataValues.relatedCategories = relatedCategories || [];

        // Limit recursion to one level deep
        if (depth > 0) {
            await fetchCategoriesRecursively(category.dataValues.relatedCategories, depth - 1);
        }
    }
};

exports.get = async (req, res) => {
    try {
        // Fetch top-level categories
        let categories = await Category.findAll({
            where: { masterCategory: 1 },
            include: [
                { model: Category, as: 'relatedCategories', include: [{ model: Category, as: 'relatedCategories' }] } // Include related categories recursively
            ]
        });

        // Fetch related categories recursively for each top-level category
        await fetchCategoriesRecursively(categories);

        // Ensure categories is an array and set default empty array if no top-level categories
        categories = categories || [];

        res.json({
            data: categories,
            status: false
        });
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


exports.getByid = async (req, res) => {
    const { id } = req.query;
    
    try {
        let categories = await Category.findAll({
            include: [
                {
                    model: Category,
                   
                    // as: 'literatures' // Alias for the included Literature model
                }
            ]
        });

        // Fetch related categories recursively for each top-level category, limited to one level deep
        await fetchCategoriesRecursively(categories, 1);

        // Ensure categories is an array and set default empty array if no top-level categories
        categories = categories || [];

        res.json({
            data: categories,
            status: false
        });
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({ message: 'Internal server error' + error });
    }
};