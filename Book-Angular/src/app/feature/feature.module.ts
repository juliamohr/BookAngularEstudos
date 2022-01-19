import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BookModule } from './book/book.module';
import { FeaturesRoutingModule } from './feature-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    BookModule
  ],
 exports: []

})
export class FeatureModule { }
