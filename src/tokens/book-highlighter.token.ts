import { InjectionToken } from "@angular/core";
import { BookHighlighter } from "../app/services/highlighter/book-highlighter.interface";

export const BOOK_HIGHLIGHTER_TOKEN = new InjectionToken<BookHighlighter>('BOOK_HIGHLIGHTER_TOKEN');