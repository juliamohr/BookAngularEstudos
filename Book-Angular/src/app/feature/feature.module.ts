import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BookModule } from './book/book.module';
import { FeaturesRoutingModule } from './feature-routing.module';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    BookModule,  MatButtonModule
  ],
 exports: []

})
export class FeatureModule { }
