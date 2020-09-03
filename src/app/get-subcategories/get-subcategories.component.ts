import { Component, OnInit } from '@angular/core';
import SubCategoriesData from '../JsonData/SubCategories.json';
import { SubCategory } from '../Models/subcategory.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-subcategories',
  templateUrl: './get-subcategories.component.html',
  styleUrls: ['./get-subcategories.component.css']
})
export class GetSubcategoriesComponent implements OnInit {

  //Selected Category
  SelectedCategory:number;
  SubCategories :SubCategory[];

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {this.SelectedCategory = +params.get('CategoryId');}
      );
      if(this.SelectedCategory == 0)
      {
        this.SubCategories = SubCategoriesData;
      }
      else{
        this.SubCategories = SubCategoriesData.filter(x => x.CategoryId == this.SelectedCategory);
      }
  }

}
