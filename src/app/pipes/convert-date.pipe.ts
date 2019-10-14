import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertDate'
})

/**
 * пайп конвертації часу реєстрації користувача
 */
export class ConvertDatePipe implements PipeTransform {

  transform(dateString: any, ...args: any[]): string {
    if ( typeof dateString === 'string') {
      const year: string = dateString.slice(0, 4);
      const month: string = dateString.slice(5, 7);
      const date: string = dateString.slice(8, 10);
      const time: string = dateString.slice(11, 19);
      const result: string = month + ' ' + date + ' ' + year + ' ' + time;
      return result;
    } else {
      return '';
    }
  }
}
