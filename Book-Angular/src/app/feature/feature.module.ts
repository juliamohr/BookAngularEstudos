import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookService } from '../core/book.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [BookService],

})
export class FeatureModule { }
