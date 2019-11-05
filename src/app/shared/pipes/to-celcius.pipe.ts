import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toCelcius'
})
export class ToCelciusPipe implements PipeTransform {

  transform(value: number): string {
    return value + " °C"
  }

}
