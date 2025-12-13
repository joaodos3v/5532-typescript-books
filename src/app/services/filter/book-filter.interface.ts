import { Book } from "../../interfaces/book.interface";

export interface BookFilter {
  matches(book: Book, term: string): boolean;
}