const Book = require("../models/book.model");


async function getAllBooks(req,res) {
    try {
        const books = await Book.find();
        return res.status(200).json({
            status: "success",
            message: "Books fetched successfully",
            data: books,
        });
    } catch (error) {
        return res.status(400).json({
            status: "error",
            message: "error in fetching books",
        });
        
    }
}

async function getBookById(req,res) {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({
                status: "error",
                message: "Book ID is required",
            });
        }
        const book = await Book.findById(id);
        if (!book) {
            return res.status(404).json({
                status: "error",
                message: "Book not found",
            });
        }
        return res.status(200).json({
            status: "success",
            message: "Book fetched successfully",
            data: book,
        });
    } catch (error) {
        return res.status(400).json({
            status: "error",
            message: "error in fetching book by id",
        });
    }
}

async function createBook(req,res) {
    try {
        const { title, description, author, price, stock, releaseDate } = req.body;
        if (!title || !description || !author || !price || !stock || !releaseDate) {
            return res.status(400).json({
                status: "error",
                message: "All fields are required",
            });
        }
        const book = await Book.create({
            title,
            description,
            author,
            price,
            stock,
            releaseDate,
        });
        return res.status(201).json({
            status: "success",
            message: "Book created successfully",
            data: book,
        });
    } catch (error) {
        return res.status(400).json({
            status: "error",
            message: "error in creating book",
        });
    }
}


async function updateBook(req,res) {
    try {
        const { id } = req.params;
        const { title, description, author, price, stock, releaseDate } = req.query;

        if(!(title || description || author || price || stock || releaseDate)) {
            return res.status(400).json({
                status: "error",
                message: "At least one field is required to update",
            });
        }

        const bookExists = await Book.findById(id);

        if (!bookExists) {
            return res.status(404).json({
                status: "error",
                message: "Book not found",
            });
        }

        const updatedData = {};

        if (title) updatedData.title = title;
        if (description) updatedData.description = description;
        if (author) updatedData.author = author;
        if (price) updatedData.price = price;
        if (stock) updatedData.stock = stock;
        if (releaseDate) updatedData.releaseDate = releaseDate;
        const updatedBook = await Book.findByIdAndUpdate(id, updatedData, { new: true });

        return res.status(200).json({
            status: "success",
            message: "Book updated successfully",
            data: updatedBook,
        });
    } catch (error) {
        return res.status(400).json({
            status: "error",
            message: "error in updating book",
        });
    }
}

async function deleteBook(req,res) {
    try {
        const { id } = req.params;

        const bookExists = await Book.findById(id);
        if (!bookExists) {
            return res.status(404).json({
                status: "error",
                message: "Book not found",
            });
        }
        
        await Book.findByIdAndDelete(id, { new: true });

        return res.status(200).json({
            status: "success",
            message: "Book deleted successfully",

        });
    } catch (error) {
        return res.status(400).json({
            status: "error",
            message: "error in deleting book",
        });
    }
}


module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook,
};