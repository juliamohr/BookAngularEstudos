import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'shared-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css'],

})
export class LivroComponent implements OnInit {

  @Input()
  formEntity: FormGroup;

  @Output()
  submit = new EventEmitter();

  keys: string[];
  value1: string;


  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.keys = Object.keys(this.formEntity.value).filter((key)=> key !== 'id');

    this.activatedRoute.data.subscribe((value) => {
    if (value.entity){
      this.formEntity.patchValue(value.entity);
    }
  });
  }
  goback(): void {
    this.router.navigate(['..'], { relativeTo: this.activatedRoute});
  }
clickOnSubmit() {
  if (this.formEntity.valid) {
    this.submit.emit(this.formEntity.value);
  }
}
}
