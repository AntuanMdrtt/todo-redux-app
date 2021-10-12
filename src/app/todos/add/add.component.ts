import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { add } from '../todo.actions';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  textInput: FormControl;

  constructor(
    private _store: Store<AppState>
  ) {
    this.textInput = new FormControl('Hola', Validators.required);
  }

  ngOnInit(): void {
  }

  add():void {
    if (this.textInput.valid) {
      this._store.dispatch(add({ text: this.textInput.value }));
      this.textInput.reset();
    }
  }
}
