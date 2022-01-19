import { Injectable, NgModule } from '@angular/core';
import {
  ActivatedRouteSnapshot, Resolve, RouterModule, Routes
} from '@angular/router';
import { Observable } from 'rxjs';
import { BookService } from 'src/app/core/book.service';
import { Book } from 'src/app/core/model/book';
import { ListComponent } from './list/list.component';
import { LivroComponent } from './livro/livro.component';


@Injectable()
export class BookDataResolver implements Resolve<Book[]>{
  constructor(private BookService: BookService){}
  resolve (){
    return this.BookService.all();
  }
}

@Injectable()
export class BooksDataResolver implements Resolve<Book>{
  constructor(private bookService: BookService){}

  resolve(route: ActivatedRouteSnapshot): Observable<Book>{
    return this.bookService.getOne(route.params.id)
  }
}

const routes: Routes =[
  {
    path: '',
    component: ListComponent,
    resolve:{
      entities: BookDataResolver,
    },
  },
  {
    path: 'add',
    component: LivroComponent,
  },
  {
    path: 'id',
    component: LivroComponent,
    resolve:{
     entity: BooksDataResolver
    }
  }
];




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
 providers: [BookDataResolver, BooksDataResolver]
})
export class BookRoutingModule { }
