import { Component, input, output } from '@angular/core';
import { HighlightedBook } from '../../interfaces/book.interface';

@Component({
  selector: 'app-highlighted-book',
  templateUrl: './highlighted-book.component.html',
  styleUrl: './highlighted-book.component.scss',
})
export class HighlightedBookComponent {
  book = input.required<HighlightedBook>();
  close = output<void>();

  onClose() {
    this.close.emit();
  }
}
