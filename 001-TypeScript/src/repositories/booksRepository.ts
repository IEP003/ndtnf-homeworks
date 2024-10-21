import { Book } from '../models/bookModel';

export class BooksRepository {
    static async getAllBooks(): Promise<Book[]> {
        return Book.find();
    }

    static async getBookById(id: string): Promise<Book | null> {
        return Book.findById(id);
    }

    static async createBook(book: Book): Promise<Book> {
        return Book.create(book);
    }

    static async updateBookById(id: string, book: Book): Promise<Book | null> {
        return Book.findByIdAndUpdate(id, book, { new: true });
    }

    static async deleteBookById(id: string): Promise<void> {
        await Book.findByIdAndDelete(id);
    }
}