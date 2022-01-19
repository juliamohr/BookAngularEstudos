import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/core/book.service';
import { Book } from 'src/app/core/model/book';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent implements OnInit {
public book: Book[];

  constructor(private bookService: BookService) { }

  ngOnInit() {
this.getBook();
  }
public getBook(): void{
  this.bookService.getBook().subscribe(
    (response: Book[] ) => {
      this.book = response;
    },
    (error: HttpErrorResponse) =>{
      alert(error.message);
    }
  )
  }
}
