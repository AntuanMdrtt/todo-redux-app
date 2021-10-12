import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToDo } from '../models/todo.model';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import { edit, remove, toggle } from '../todo.actions';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() todo!: ToDo;
  @ViewChild('inputFisico') inputFisico!: ElementRef;

  completed!: FormControl;
  txtInput!: FormControl;
  editing: boolean = false;

  constructor(
    private _store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.completed = new FormControl(this.todo.completed);
    this.txtInput = new FormControl(this.todo.text, Validators.required);

    this.completed.valueChanges
      .subscribe(value => {
        console.log(value);
        this._store.dispatch(toggle({ id: this.todo.id }));
      });
  }

  edit() {
    this.editing = true;
    this.txtInput.setValue(this.todo.text);

    setTimeout(() => {
      this.inputFisico.nativeElement.select();
    }, 100);
  }

  edited() {
    this.editing = false;

    if (this.txtInput.valid && this.txtInput.value !== this.todo.text) {
      this._store.dispatch(edit({ id: this.todo.id, text: this.txtInput.value }));
    }
  }

  remove() {
    this._store.dispatch(remove({ id: this.todo.id }));
  }

}
