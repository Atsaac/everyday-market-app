import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category-menu-item',
  standalone: true,
  templateUrl: './category-menu-item.component.html',
  styleUrls: ['./category-menu-item.component.css']
})
export class CategoryMenuItemComponent {

  // Receive name from parent
  @Input() categoryName = '';

  // Emit click event
  @Output() itemClicked = new EventEmitter<string>();

  onItemClick() {
    this.itemClicked.emit(this.categoryName);
  }
}
