import { Component, input } from '@angular/core';
import { Book, DigitalBook } from '../../interfaces/book.interface';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss',
})
export class BookCardComponent {
  book = input.required<Book>();

  // Exemplo de Intersection Types ('E' lógico)
  livroCompleto: DigitalBook = {
    title: "",
    author: "",
    publishDate: "",
    publisher: "",
    url: ""
  }

  teste() {
    const meuLivro: Book = {
      title: 'Neuromancer',
      author: 'William Gibson',
      publishDate: '1984',
      publisher: 'Ace Books'
      // coverUrl é opcional, então não precisamos colocar
    };

    const meuOutroLivro: Book = {
      title: 'Duna',
      author: 'Frank Herbert',
      publishDate: '1965',
      publisher: 'Exemplo',
      coverUrl: 'https://google.com'
    }
  }
}
