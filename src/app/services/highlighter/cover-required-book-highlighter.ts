import { Book } from "../../interfaces/book.interface";
import { BookHighlighter } from "./book-highlighter.interface";

export class CoverRequiredBookHighlighter implements BookHighlighter {
  highlight(book: Book) {
    if (!book.coverUrl) {
      return null;
    }

    return {
      title: book.title,
      author: book.author,
      coverUrl: book.coverUrl,
    };
  }
}