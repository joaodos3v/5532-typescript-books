import { Component, input } from '@angular/core';

// "O Union Type é o 'OU' lógico.
type StatusLivro = 'disponível' | 'emprestado' | 'em manutenção'; 

export interface Book {
  title: string;
  author: string;
  publishDate: string;
  publisher: string;
  coverUrl?: string;
  available?: boolean;
  status?: StatusLivro;
}

interface DigitalBook {
  url: string;
}

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss',
})
export class BookCardComponent {
  book = input.required<Book>();

  // Exemplo de Intersection Types ('E' lógico)
  livroCompleto: Book & DigitalBook = {
    title: "",
    author: "",
    publishDate: "",
    publisher: "",
    url: ""
  }
}
