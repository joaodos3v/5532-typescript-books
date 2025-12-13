import { Book, HighlightedBook } from "../../interfaces/book.interface";
import { SortField, SortOrder } from "../book-sorter.service";

/**
 * Exemplo de uma interface que NÃO está respeitando o princípio
 * de Segregação de Interfaces (está muito "inflada").
 */
export interface BookActions {
  search(books: Book[], term: string): Book[];
  sort(books: Book[], field: SortField, order: SortOrder): Book[];
  highlight(book: Book): HighlightedBook | null;
}