import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryMenuItemComponent } from '../category-menu-item/category-menu-item.component';
import { Category } from '../../models/category';

@Component({
  selector: 'app-category-menu',
  standalone: true,
  imports: [CommonModule, CategoryMenuItemComponent],
  templateUrl: './category-menu.component.html'
})
export class CategoryMenuComponent {

  // Receive categories from parent
  @Input() categories: Category[] = [];

  // Send selected category to parent
  @Output() categorySelected = new EventEmitter<Category>();

  onItemClicked(category: Category) {
    this.categorySelected.emit(category);
  }
}
