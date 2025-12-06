import { Component, input } from '@angular/core';

export interface Book {
  title: string;
  author: string;
  publishDate: string;
  publisher: string;
  coverUrl?: string;
  available?: boolean;
}

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss',
})
export class BookCardComponent {
  book = input.required<Book>();
}
