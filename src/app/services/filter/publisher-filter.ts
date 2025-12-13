import { Book } from "../../interfaces/book.interface";
import { BookFilter } from "./book-filter.interface";

export class PublisherFilter implements BookFilter {
  matches(book: Book, term: string): boolean {
    return book.publisher.toLowerCase().includes(term);
  }
}