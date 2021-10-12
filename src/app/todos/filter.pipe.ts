import { Pipe, PipeTransform } from '@angular/core';

import { ToDo } from './models/todo.model';
import { ValidFilters } from '../filters/filter.action';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(value: ToDo[], filter: ValidFilters): ToDo[] {
    switch (filter) {
      case 'todos':
        return [...value];
      case 'completados':
        return value.filter(todo => todo.completed);
      case 'pendientes':
        return value.filter(todo => !todo.completed);
      default:
        return [...value];
    }
  }

}
