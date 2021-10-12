import { Action, createReducer, on } from '@ngrx/store';
import { setFilter, ValidFilters } from './filter.action';


export const initialFilterSate: ValidFilters = 'todos';

const _filterReducer = createReducer<ValidFilters, Action>(
  initialFilterSate,
  on(setFilter, (state, { filter }) => filter),
);

export function filterReducer(state: ValidFilters = initialFilterSate, action: Action) {
  return _filterReducer(state, action);
}