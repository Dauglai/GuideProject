import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {

  transform(inputList: any[], size:number, index:number): any[] {
    return inputList.slice(index*size,(index+1)*size);
  }

}
