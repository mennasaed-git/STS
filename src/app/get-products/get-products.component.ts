import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../Models/product.model';
import ProductsData from '../JsonData/Products.json';
@Component({
  selector: 'app-get-products',
  templateUrl: './get-products.component.html',
  styleUrls: ['./get-products.component.css']
})
export class GetProductsComponent implements OnInit {

    //Selected Sub Category
    SelectedSubCategory:number;
    products : Product[];

    //Contain Details for the selected product
    SelectedProduct : Product=new Product();

    //To Display Product Details Dialog
    displayDetails=false;

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {this.SelectedSubCategory = +params.get('SubCategoryId');}
      );

      if(this.SelectedSubCategory == 0)
      {
        this.products = ProductsData;
      }
      else{
        this.products = ProductsData.filter(x => x.SubCategoryId == this.SelectedSubCategory);
      }
  }

  DisplayProductDetails(ProductId : number)
  {
    console.log(ProductId)
    this.displayDetails=true;
    this.SelectedProduct = this.products.find(element => element.ID == ProductId);
  }

}
