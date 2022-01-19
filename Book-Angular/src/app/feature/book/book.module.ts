import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivroComponent } from './livro/livro.component';
import { BookService } from 'src/app/core/book.service';



@NgModule({
  declarations: [LivroComponent],
  imports: [
    CommonModule
  ],
  providers: [BookService],
})
export class BookModule { }
