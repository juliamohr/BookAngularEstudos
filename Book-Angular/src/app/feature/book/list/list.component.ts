import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/core/book.service';
import { DeleteEvent } from 'src/app/core/model/deleteEvent';
import { SeacrhEvent } from 'src/app/core/model/SearchEvent';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  headers: string[] = ['Id', 'Nome', 'Autor', 'Sinopse', 'Genero', 'Preço', 'Actions' ];
book;
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
this.bookService.all().subscribe((value)=>{
  this.book = value;
})
  }

  deleteBook(event: DeleteEvent): void{
    this.bookService.delete(event.id).subscribe(()=>{
      this.bookService.all().subscribe(event.callback);
    });

  }

  searchBook (event: SeacrhEvent): void{
    this.bookService.all(event.query).subscribe(event.callback);
  }

}
