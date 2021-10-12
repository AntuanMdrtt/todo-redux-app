import { ValueConverter } from "@angular/compiler/src/render3/view/template";
import { Action, createReducer, on } from "@ngrx/store";
import { ToDo } from "./models/todo.model";
import * as actions from "./todo.actions";

export const initialState: ToDo[] = [
  new ToDo('Salvar el mundo'),
  new ToDo('Visitar a Iron Man'),
  new ToDo('Luchar con Hulk'),
  new ToDo('Limpiar la ciudad'),
];

const _todoReducer = createReducer(
  initialState,
  on(actions.add, (state, { text }) => [...state, new ToDo(text)]),
  on(actions.toggle, (state, { id }) => {
    return state.map(item => {
      return (item.id === id) ? { ...item, completed: !item.completed } : item;
    });
  }),
  on(actions.edit, (state, { id, text }) => {
    return state.map(item => {
      return (item.id === id) ? { ...item, text } : item;
    });
  }),
  on(actions.remove, (state, { id }) => state.filter(item => item.id !== id)),
  on(actions.toggleAll, (state, { value }) => state.map(item => {
    return { ...item, completed: value };
  })),
  on(actions.clearCompleted, (state) => state.filter(todo => !todo.completed))
)

export function todoReducer(state = initialState, action: Action) {
  return _todoReducer(state, action);
}