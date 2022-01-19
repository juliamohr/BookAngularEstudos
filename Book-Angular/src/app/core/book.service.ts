import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Book } from './model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private _book = new Subject<Book>();
  private baseUrl = `${environment.baseUrl}/livro`;

  constructor(private http: HttpClient) { }

 all(query?: string){
   const params = query ? {params: { q: query} } : {};
   return this.http.get<Book[]>(this.baseUrl, params);
 }
 getOne(id: number){
   return this.http.get<Book>(`${this.baseUrl}/${id}`);
  }
  delete (id: number){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  upsert(book: Book){
    book.preco = Number(book.preco);
    if(book.id){
      return this.http.patch<Book>(`${this.baseUrl}/${book.id}`, book);
    } else {
      return this.http.post<Book>(this.baseUrl, book)
    }
  }
  getbook(): Observable<Book>{
    return this._book.asObservable();
  }
  setbook(book: Book){
    this._book.next(book);
  }
}
