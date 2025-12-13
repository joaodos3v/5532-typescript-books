import { Injectable } from "@angular/core";
import { Book } from "../interfaces/book.interface";
import { AuthorFilter } from "./filter/author-filter";
import { BookFilter } from "./filter/book-filter.interface";
import { CoverUrlFilter } from "./filter/cover-url-filter";
import { PublishDateFilter } from "./filter/publish-date-filter";
import { PublisherFilter } from "./filter/publisher-filter";
import { TitleFilter } from "./filter/title-filter";

@Injectable({
  providedIn: 'root'
})
export class BookSearchService {
  private filters: BookFilter[] = [
    new TitleFilter(),
    new AuthorFilter(),
    new PublisherFilter(),
    new PublishDateFilter(),
    new CoverUrlFilter()
  ];

  /**
   * Filtra livros usando todos os filtros registrados
   * Para adicionar um novo critério, basta criar uma nova classe BookFilter
   * SEM modificar esta classe (OCP)
   */
  search(books: Book[], term: string): Book[] {
    const normalizedTerm = term.toLowerCase().trim();

    if (!normalizedTerm) {
      return books;
    }

    return books.filter(book =>
      this.filters.some(filter => filter.matches(book, normalizedTerm))
    );
  }
}