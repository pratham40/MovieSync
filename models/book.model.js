const mongoose = require("mongoose");
const { Schema } = mongoose;


const bookSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        stock:{
            type: Number,
            required: true,
        },
        releaseDate: {
            type: Date,
            required: true,
        },
    }
)

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;