import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormat'  // Nom de la pipe
})
export class NumberFormatPipe implements PipeTransform {
  transform(value: number): string {
    if (value < 1000) {
      return value.toString(); // Affiche le nombre en unités
    } else if (value < 1000000) {
      return `${Math.floor(value / 1000)}k`; // Affiche en milliers
    } else {
      return `${Math.floor(value / 1000000)}M`; // Affiche en millions
    }
  }
}
