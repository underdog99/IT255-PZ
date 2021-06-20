import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(list: any[], filterText: string): any {
    return list ? list.filter(item => item.id.search(new RegExp(filterText, 'i')) > -1) : [];
  }

}
