import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchTeacher'
})
export class SearchTeacherPipe implements PipeTransform {

  transform(teachers: any[], searchText: string, searchNumberCourse: string): any[] {
    if (!teachers){
      return [];
    }
    let result: any[] = teachers;
    if (searchText){
      searchText = searchText.toLocaleLowerCase();
      result = result.filter((teachers: any) =>{
        return `${teachers.name}`.toLocaleLowerCase().includes(searchText);
      });
    }   
    if (searchNumberCourse && !(searchNumberCourse === '-')){
      searchNumberCourse = searchNumberCourse.toLocaleLowerCase();
      result = result.filter((teachers: any) =>{
        return `${teachers.number_course}`.toLocaleLowerCase().includes(searchNumberCourse);
      });
    }  
    // console.log(result); 
    return result;
  }

}
