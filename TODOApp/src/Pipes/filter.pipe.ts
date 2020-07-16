import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filteredTitle: string): any {
    if (filteredTitle == '' || filteredTitle == undefined) {
      return value
    }
    const resultArray = [];
    for (let item of value) {
      if (item.title.toUpperCase().indexOf(filteredTitle.toUpperCase()) !== -1) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}