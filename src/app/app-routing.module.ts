import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetCategoriesComponent } from './get-categories/get-categories.component';
import { GetSubcategoriesComponent } from './get-subcategories/get-subcategories.component';
import { GetProductsComponent } from './get-products/get-products.component';

const routes: Routes = [
  
  {path:'Categories' , component:GetCategoriesComponent  },
  {path:'SubCategories/:CategoryId' , component:GetSubcategoriesComponent  },
  {path:'Products/:SubCategoryId' , component:GetProductsComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
