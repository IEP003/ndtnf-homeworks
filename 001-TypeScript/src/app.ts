import express from 'express';
import { BooksRepository } from './repositories';

const app = express();

app.get('/api/books', async (req: any, res: any, next: any) => {
    try {
        const books = await BooksRepository.getAllBooks();
        res.json(books);
    } catch (error) {
        next(error);
    }
});


export default app;