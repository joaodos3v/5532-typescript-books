import { Book } from "../../interfaces/book.interface";
import { BookFilter } from "./book-filter.interface";

export class CoverUrlFilter implements BookFilter {
  matches(book: Book, term: string): boolean {
    return (book?.coverUrl || '').toLowerCase().includes(term);
  }
}