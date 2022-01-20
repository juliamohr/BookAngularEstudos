import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { LivroComponent } from './livro/livro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';



@NgModule({
  declarations: [ListComponent, LivroComponent],
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule, MatButtonModule, FormsModule, CardModule
  ],
  exports:[ListComponent, LivroComponent]
})
export class SharedModule { }
