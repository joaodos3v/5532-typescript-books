import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookCardComponent } from './components/book-card/book-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NoBooksComponent } from './components/no-books/no-books.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { Book, BookWithID } from './interfaces/book.interface';

// Tipos para ordenação
export type SortField = 'title' | 'author';
export type SortOrder = 'asc' | 'desc';

enum Ordenacao {
  ASC = 'Crescente',
  DESC = 'Descrescente',
}

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    SearchBoxComponent,
    BookCardComponent,
    NoBooksComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private allBooks: BookWithID[] = [
    {
      title: 'Angular para Iniciantes',
      author: 'João Silva',
      publishDate: '12/04/2020',
      publisher: 'Arqueiro',
      coverUrl: 'https://picsum.photos/200/300'
    },
    {
      title: 'TypeScript Avançado',
      author: 'Maria Santos',
      publishDate: '15/06/2021',
      publisher: 'Companhia das Letras'
    },
    {
      title: 'JavaScript Moderno',
      author: 'Pedro Oliveira',
      publishDate: '20/03/2019',
      publisher: 'Arqueiro',
    },
    {
      title: 'CSS Grid Layout',
      author: 'Ana Costa',
      publishDate: '10/11/2022',
      publisher: 'Novatec',
      coverUrl: 'https://picsum.photos/180/310'
    },
    {
      title: 'HTML5 e CSS3',
      author: 'Carlos Ferreira',
      publishDate: '05/08/2018',
      publisher: 'Arqueiro',
      coverUrl: 'https://picsum.photos/185/315'
    },
    {
      title: 'React Essencial',
      author: 'Juliana Alves',
      publishDate: '22/01/2023',
      publisher: 'Companhia das Letras',
    },
    {
      title: 'Node.js para Backend',
      author: 'Roberto Lima',
      publishDate: '18/09/2020',
      publisher: 'Novatec',
    },
    {
      title: 'Vue.js na Prática',
      author: 'Fernanda Rocha',
      publishDate: '30/05/2021',
      publisher: 'Arqueiro',
      coverUrl: 'https://picsum.photos/175/305',
    },
    {
      title: 'Web Design Responsivo',
      author: 'Lucas Mendes',
      publishDate: '14/12/2022',
      publisher: 'Companhia das Letras',
    },
  ];

  searchTerm = signal('');
  sortField = signal<SortField>('title');
  sortOrder = signal<SortOrder>('asc');

  // Função genérica de ordenação que pode ser reutilizada para qualquer tipo
  private sortArray<T>(array: T[], field: keyof T, order: SortOrder): T[] {
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

  filteredBooks = computed(() => {
    const term = this.searchTerm().toLowerCase().trim();
    let books = this.allBooks;

    if (term) {
      books = this.allBooks.filter(
        (book) =>
          book.title.toLowerCase().includes(term) ||
          book.author.toLowerCase().includes(term) ||
          book.publishDate.includes(term) ||
          book.publisher.toLowerCase().includes(term)
      );
    }

    // Aplica a ordenação usando a função genérica
    return this.sortArray<Book>(books, this.sortField(), this.sortOrder());
  });

  hasSearched = computed(() => this.searchTerm().trim().length > 0);
  showNoBooks = computed(() => this.hasSearched() && this.filteredBooks().length === 0);

  onSearch(term: string) {
    this.searchTerm.set(term);
  }

  onSortChange(field: SortField, order: SortOrder) {
    this.sortField.set(field);
    this.sortOrder.set(order);
  }
}
