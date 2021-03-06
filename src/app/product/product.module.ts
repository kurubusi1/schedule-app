import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './product-listings/product-listings.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductService } from './shared/product.service';
import { AuthGuard } from '../auth/shared/auth.guard';

const routes: Routes = [
  { 
    path: 'products', component: ProductComponent,
    children: [
      { path: '', component: ProductListComponent },
      { path: ':productId', component: ProductDetailComponent, canActivate: [AuthGuard] }

    ]
  }

];


@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductComponent


  ],
  imports: [
    BrowserModule,
    RouterModule.forChild(routes),
    CommonModule

  ],
  providers: [
    ProductService
  ],
  bootstrap: []
})
export class ProductModule { }
