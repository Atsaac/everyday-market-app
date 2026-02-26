import { Routes } from '@angular/router';
import { RegisterPageComponent } from './shared/register-page/register-page.component';
import { ProductsPageComponent } from './market/products-page/products-page.component';
import { HeaderComponent } from './shared/header/header.component';
import { RouterOutlet } from '@angular/router';  


export const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: 'register', component: RegisterPageComponent },
  { path: 'products', component: ProductsPageComponent }
];
