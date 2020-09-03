import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { GetSubcategoriesComponent } from './get-subcategories/get-subcategories.component';
import { GetProductsComponent } from './get-products/get-products.component';

//Prime Ng 
import {DataViewModule} from 'primeng/dataview';
import { GetCategoriesComponent } from './get-categories/get-categories.component';
import {PanelModule} from 'primeng/panel';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {CardModule} from 'primeng/card';
import {DialogModule} from 'primeng/dialog';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    GetCategoriesComponent,
    GetSubcategoriesComponent,
    GetProductsComponent
  ],
  imports: [
    BrowserAnimationsModule,BrowserModule,AppRoutingModule,DataViewModule,PanelModule
    ,ConfirmDialogModule,CardModule,DialogModule
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
