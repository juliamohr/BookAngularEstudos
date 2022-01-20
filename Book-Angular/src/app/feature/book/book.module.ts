import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { LivroComponent } from './livro/livro.component';

import {ReactiveFormsModule} from '@angular/forms';

import { BookRoutingModule } from './book-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [LivroComponent, ListComponent, HomeComponent],
  imports: [
    CommonModule,
    BookRoutingModule,
    ReactiveFormsModule,
    SharedModule


  ],
})
export class BookModule { }
