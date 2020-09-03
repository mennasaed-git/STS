import { Component, OnInit } from '@angular/core';
import CategoriesData from '../JsonData/Categories.json';
import { Category } from '../Models/category.model';

@Component({
  selector: 'app-get-categories',
  templateUrl: './get-categories.component.html',
  styleUrls: ['./get-categories.component.css']
})
export class GetCategoriesComponent implements OnInit {

  categories :Category[];

  constructor() { }

  ngOnInit() {
    this.categories = CategoriesData;
  }

}
