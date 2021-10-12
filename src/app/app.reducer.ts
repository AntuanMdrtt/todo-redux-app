import { ActionReducerMap } from '@ngrx/store';

import { ToDo } from './todos/models/todo.model';
import { ValidFilters } from './filters/filter.action';

import { todoReducer } from './todos/todo.reducer';
import { filterReducer } from './filters/filter.reduce';

export interface AppState {
  todos: ToDo[];
  filter: ValidFilters;
}

export const AppReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filter: filterReducer
}