import { Book } from "../../interfaces/book.interface";
import { BookFilter } from "./book-filter.interface";

export class AuthorFilter implements BookFilter {
  matches(book: Book, term: string): boolean {
    return book.author.toLowerCase().includes(term);
  }
}