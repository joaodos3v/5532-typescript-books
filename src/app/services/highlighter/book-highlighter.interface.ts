import { Book, HighlightedBook } from "../../interfaces/book.interface";

export interface BookHighlighter {
  highlight(book: Book): HighlightedBook | null;
}