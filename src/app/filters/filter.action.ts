import { createAction, props } from '@ngrx/store';

export type ValidFilters = 'todos' | 'completados' | 'pendientes';


export const setFilter = createAction(
    '[Filter] set Filter', props<{ filter: ValidFilters }>()
);