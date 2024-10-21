import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
    private books = [];

    findAll() {
        return this.books;
    }

    findOne(id: number) {
        return this.books[id];
    }

    create(book: any) {
        this.books.push(book);
    }

    update(id: number, book: any) {
        this.books[id] = book;
    }

    delete(id: number) {
        this.books.splice(id, 1);
    }
}
