import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onSale'
})
export class OnSalePipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   console.log('My pipe:', value);
  //   return null;
  // }

  // transform(gender: string): string {
  //   return gender === "Male" ? "Là con trai" : "Là con gái"
  // }

  transform( rich: boolean, isRich: string = "Giàu", isNotRich = "Nghèo"): string {
    return rich ? isRich : isNotRich;
  }
  
}
