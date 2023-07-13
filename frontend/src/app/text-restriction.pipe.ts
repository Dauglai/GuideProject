import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textRestriction'
})
export class TextRestrictionPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
