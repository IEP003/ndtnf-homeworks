import { Container } from 'inversify';
import { BooksRepository } from './repositories/booksRepository';

const container = new Container();

container.bind(BooksRepository).toSelf();

export default container;