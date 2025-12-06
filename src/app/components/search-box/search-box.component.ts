import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-box',
  imports: [FormsModule],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.scss'
})
export class SearchBoxComponent {
  @Output() searchChange = new EventEmitter<string>();
  searchTerm: string = '';

  onSearch() {
    this.searchChange.emit(this.searchTerm);
  }

  onInputChange() {
    this.searchChange.emit(this.searchTerm);
  }
}


