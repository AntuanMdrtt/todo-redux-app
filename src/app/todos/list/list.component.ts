import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToDo } from '../models/todo.model';
import { AppState } from '../../app.reducer';
import { ValidFilters } from '../../filters/filter.action';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  todos: ToDo[] = [];
  currentFilter!: ValidFilters;

  constructor(
    private _store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this._store.subscribe(({ todos, filter }) => {
      this.todos = todos;
      this.currentFilter = filter;
    });
  } 

}
