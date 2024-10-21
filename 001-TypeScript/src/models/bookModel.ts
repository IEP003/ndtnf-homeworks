import mongoose, { Schema, Document } from 'mongoose';

export interface Book extends Document {
    id: string;
    title: string;
    description: string;
    authors: string;
    favorite: string;
    fileCover: string;
    fileName: string;
}

const bookSchema: Schema = new Schema({
    id: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    authors: { type: String, required: true },
    favorite: { type: String, required: true },
    fileCover: { type: String, required: true },
    fileName: { type: String, required: true }
});

const BookModel = mongoose.model<Book & Document>('Book', bookSchema);

export { BookModel };