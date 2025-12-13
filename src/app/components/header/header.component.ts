import { Component, output } from '@angular/core';
import { SortField, SortOrder } from '../../services/book-sorter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  sortChange = output<{ field: SortField; order: SortOrder }>();
  
  showSortMenu = false;

  toggleSortMenu() {
    this.showSortMenu = !this.showSortMenu;
  }

  selectSort(field: SortField, order: SortOrder) {
    this.sortChange.emit({ field, order });
    this.showSortMenu = false;
  }
}



