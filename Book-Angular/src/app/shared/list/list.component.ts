import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'shared-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input()
  headers: string[];

  @Output()
  deleteEntity = new EventEmitter();

  @Output()
  searchEntity = new EventEmitter();

  @Output()
  limitEntity = new EventEmitter();

  entities: any[];
  keys: string[]
  inputValue: string;



  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((value)=>{
      this.entities = value.entities;
    });
    this.keys = Object.keys(this.entities[0]);



  }

  goToAdd(): void {
    this.router.navigate(['add'], { relativeTo: this.activatedRoute });
  }

  onDeleteEntity(id: number): void {
    const obj = {
      id,
      callback: this.setEntities
    };
    this.deleteEntity.emit(obj);
  }

  toLimit(): void {
    const limitTo = 1

    const obj = {
      limit: limitTo,
      callback: (entities) => {
        this.setEntities(entities)
      }
    };

    this.limitEntity.emit(obj)
  }


  private setEntities(entities) {
    this.entities = entities
  }
}


