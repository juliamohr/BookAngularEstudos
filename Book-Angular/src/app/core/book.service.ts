import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl = `${environment.baseUrl}/livro`;

  constructor(private http: HttpClient) { }

  public getBook(): Observable<any>{
  return this.http.get<any>(`${this.baseUrl}/livro/all`);
}
public addBook(book: Book): Observable<Book>{
  return this.http.post<Book>(`${this.baseUrl}/livro/add`, book);
}

public updateBook(book: Book): Observable<Book>{
  return this.http.put<Book>(`${this.baseUrl}/livro/update`, book);
}
delete(id: number) {
  return this.http.delete(`${this.baseUrl}/${id}`);
}
}
