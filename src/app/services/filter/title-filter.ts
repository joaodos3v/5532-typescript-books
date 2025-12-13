import { Book } from "../../interfaces/book.interface";
import { BookFilter } from "./book-filter.interface";

export class TitleFilter implements BookFilter {
  matches(book: Book, term: string): boolean {
    return book.title.toLowerCase().includes(term);
  }
}