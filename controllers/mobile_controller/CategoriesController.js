const db = require("../../database/database");
const Category = require("../../models/CategoryModel");
const Subcategory = require("../../models/SubCategoryModel");

const fetchCategoriesRecursively = async (categories, depth) => {
    if (!Array.isArray(categories)) {
        categories = [categories];
    }

    for (let category of categories) {
        // Fetch related categories only once (one level deep) asasd
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
        // Fetch a single category by its id
        let category = await Category.findOne({
            where: {
                id: id
            },
            include: [
                {
                    model: Category,
                    as: 'relatedCategories', // Alias for the related categories
                    through: { attributes: [] }, // Exclude attributes from join table if using a many-to-many relationship
                    attributes: ['id'], // Select only the id column from related categories
                }
            ]
        });

        // Check if category exists
        if (!category) {
            return res.status(400).json({ message: 'Category not found' });
        }

        // Fetch related categories recursively for the found category
        await fetchCategoriesRecursively(category, 1);

        res.json({
            data: category,
            status: true
        });
    } catch (error) {
        console.error('Error fetching category:', error);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};