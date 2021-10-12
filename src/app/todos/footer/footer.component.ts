import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../app.reducer';
import { ValidFilters, setFilter } from '../../filters/filter.action';
import { clearCompleted } from '../todo.actions';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  currentFilter!: ValidFilters;
  filters: ValidFilters[] = ['todos', 'completados', 'pendientes'];
  pendings: number = 0;

  constructor(
    private _store: Store<AppState>
  ) { }

  ngOnInit(): void {
    // this._store.select('filter')
    //   .subscribe(filter => this.currentFilter = filter);

    this._store.subscribe(({ filter, todos }) => {
      this.currentFilter = filter;
      this.pendings = todos.filter(todo => !todo.completed).length;
    });
  }

  changeFilter(filter: ValidFilters) {
    console.log(filter);
    this._store.dispatch(setFilter({ filter }));
  }

  clearCompleted(): void {
    this._store.dispatch(clearCompleted());
  }
}
