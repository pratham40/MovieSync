const express = require('express');
const { getAllBooks, getBookById, createBook, updateBook, deleteBook } = require('../controllers/book.controller');
const router = express.Router();

/**
 * @swagger
 * /api/v1/books/:
 *   get:
 *     summary: Get all books
 *     responses:
 *       200:
 *         description: List of books
 */
router.get("/",getAllBooks)



/**
 * @swagger
 * /api/v1/books/{id}:
 *   get:
 *     summary: Get a book by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the book to retrieve
 *     responses:
 *       200:
 *         description: Book details
 */

router.get("/:id",getBookById)


/**
 * @swagger
 * /api/v1/books/:
 *   post:
 *     summary: Create a new book
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               author:
 *                 type: string
 *               price:
 *                 type: number
 *               stock:
 *                 type: number
 *               releaseDate:
 *                  type: Date
 *     responses:
 *       201:
 *         description: Book created
 * 
 */


router.post("/",createBook)


/**
 * @swagger
 * /api/v1/books/{id}:
 *   put:
 *     summary: Update a book by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the book to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Title of the book
 *               description:
 *                 type: string
 *                 description: Description of the book
 *               author:
 *                 type: string
 *                 description: Author of the book
 *               price:
 *                 type: number
 *                 description: Price of the book
 *               stock:
 *                 type: number
 *                 description: Number of books in stock
 *               releaseDate:
 *                 type: string
 *                 format: date
 *                 description: Release date of the book
 *     responses:
 *       200:
 *         description: Book updated successfully
 *       404:
 *         description: Book not found
 *       400:
 *         description: Invalid input
 */

router.put("/:id",updateBook)


/**
 * @swagger
 * /api/v1/books/{id}:
 *   delete:
 *     summary: Delete a book by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the book to delete
 *     responses:
 *       200:
 *         description: Book deleted
 */
router.delete("/:id",deleteBook)

module.exports = router;