import { Component } from '@angular/core';
import { CategoryMenuComponent } from '../category-menu/category-menu.component';
import { Category } from '../../models/category';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [CategoryMenuComponent],
  templateUrl: './products-page.component.html'
})
export class ProductsPageComponent {

  // This component represents the Products page
  categoryList: Category[] = [
    { id: 1, name: 'Coffee' },
    { id: 2, name: 'Gaming' },
    { id: 3, name: 'Music' },
    { id: 4, name: 'Travel' },
    { id: 5, name: 'Tech' }
  ];

  // Runs when a category is clicked
  onCategorySelected(category: Category) {
    alert(`You selected ${category.name}`);
  }
}
