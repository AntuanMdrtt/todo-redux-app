import { createAction, props } from "@ngrx/store";

export const add = createAction(
  '[TODO] Add', props<{ text: string }>()
);
export const toggle = createAction(
  '[TODO] Toggle', props<{ id: number }>()
);
export const edit = createAction(
  '[TODO] Edit', props<{ id: number, text: string }>()
);
export const remove = createAction(
  '[TODO] Remove', props<{ id: number }>()
);
export const toggleAll = createAction(
  '[TODO] Toggle All', props<{ value: boolean }>()
);
export const clearCompleted = createAction(
  '[TODO] Clear completed'
);