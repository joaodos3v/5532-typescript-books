import { Book } from "../../interfaces/book.interface";
import { BookHighlighter } from "./book-highlighter.interface";

export class DefaultBookHighlighter implements BookHighlighter {
  highlight(book: Book) {
    return {
      title: book.title,
      author: book.author,
      coverUrl: book.coverUrl,
    };
  }
}