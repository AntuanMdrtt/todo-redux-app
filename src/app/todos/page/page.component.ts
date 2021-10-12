import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { toggleAll } from '../todo.actions';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  complets: boolean = false;

  constructor(
    private _store: Store<AppState>
  ) { }

  ngOnInit(): void {
  }

  toggleAll() {
    this.complets = !this.complets;
    this._store.dispatch(toggleAll({ value: this.complets }));
  }

}
