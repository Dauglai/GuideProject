import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(articles: any[], searchText: string): any[] {
    if (!articles){
      return [];
    }
    let result: any[] = articles;
    if (searchText){
      searchText = searchText.toLocaleLowerCase();
      result = result.filter((article: any) =>{
        return `${article.name}`.toLocaleLowerCase().includes(searchText);
      });
    }   
    console.log(result); 
    return result;
  }
}
