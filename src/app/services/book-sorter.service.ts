import { Injectable } from "@angular/core";

// Tipos para ordenação
export type SortField = 'title' | 'author' | 'publisher';
export type SortOrder = 'asc' | 'desc';

@Injectable({
  providedIn: 'root'
})
export class BookSorterService {
  sortArray<T>(array: T[], field: keyof T, order: SortOrder): T[] {
    return [...array].sort((a, b) => {
      const valueA = String(a[field]).toLowerCase();
      const valueB = String(b[field]).toLowerCase();

      if (order === 'asc') {
        return valueA.localeCompare(valueB);
      } else {
        return valueB.localeCompare(valueA);
      }
    });
  }
}