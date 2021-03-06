import Category from '../Models/Category.js';

export const createNewCategory = async (req, res) => {
    try {
        const newCategory = new Category({image: 'Hamburger', name: 'denee', productCount: 6, products: []});
        await newCategory.save();
        res.status(200).json(newCategory);
    } catch (e) {
        res.status(400).json({message: e.message});
    }
};

export const getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        let mapped = categories.map(category => ({
            _id: category._id,
            name: category.name,
            image: category.image
        }))
        res.status(200).json(mapped);
    } catch (e) {
        res.status(400).json({message: e.message});
    }
};
