import { Book } from "../../interfaces/book.interface";
import { BookFilter } from "./book-filter.interface";

export class PublishDateFilter implements BookFilter {
  matches(book: Book, term: string): boolean {
    return book.publishDate.toLowerCase().includes(term);
  }
}