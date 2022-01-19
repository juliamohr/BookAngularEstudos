import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { LivroComponent } from './livro/livro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';





@NgModule({
  declarations: [ListComponent, LivroComponent],
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule, MatButtonModule
  ],
  exports:[ListComponent, LivroComponent]
})
export class SharedModule { }
