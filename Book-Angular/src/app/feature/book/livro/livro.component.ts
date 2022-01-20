import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/core/book.service';
import { Book } from 'src/app/core/model/book';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent implements OnInit {

  formBook: FormGroup;
  formTypeLabel: string;

  constructor(private bookService: BookService, private formBuilder: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
this.formBook = this.formBuilder.group({
  id: '',
  nome: ['',[Validators.required]],
autor: ['',[Validators.required]],
sinopse:['',[Validators.required]],
genero: ['',[Validators.required]],
preço: ['',[Validators.required]],
imageUrl: ['',[Validators.required]],
});

const hasId = Boolean (this.activatedRoute.snapshot.params.id);

this.formTypeLabel = hasId ? 'Atualizar' : 'Cadastrar';

}

submit (event: Book) {
  this.bookService.upsert(event).subscribe(()=> {
  this.router.navigate(['..'], {relativeTo: this.activatedRoute});
  });
}
}
