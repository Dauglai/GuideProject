import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchTeacher'
})
export class SearchTeacherPipe implements PipeTransform {

  transform(teachers: any[], searchText: string): any[] {
    if (!teachers){
      return [];
    }
    let result: any[] = teachers;
    if (searchText){
      searchText = searchText.toLocaleLowerCase();
      result = result.filter((teachers: any) =>{
        console.log(teachers.name); 
        return `${teachers.name}`.toLocaleLowerCase().includes(searchText);
      });
    }   
    console.log(result); 
    return result;
  }

}
