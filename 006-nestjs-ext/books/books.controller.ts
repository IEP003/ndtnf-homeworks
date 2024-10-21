import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './interfaces/book.interface';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) { }

    @Get()
    async findAll(): Promise<Book[]> {
        return this.booksService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: string): Promise<Book> {
        return this.booksService.findById(id);
    }

    @Post()
    async create(@Body() createBookDto: CreateBookDto): Promise<Book> {
        return this.booksService.create(createBookDto);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateBookDto: CreateBookDto): Promise<Book> {
        return this.booksService.update(id, updateBookDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<Book> {
        return this.booksService.delete(id);
    }
}