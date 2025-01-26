import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'durationPipe' })
export class DurationPipe implements PipeTransform {
  transform(value: number): string {
    if (value < 0) {
      return 'Durée invalide'; // Gestion des valeurs négatives
    }

    const hours = Math.floor(value / 3600);
    const minutes = Math.floor((value % 3600) / 60);
    const seconds = Math.round(value % 60);

    let formattedDuration = '';
    if (value < 60) {
      formattedDuration = `0:${seconds < 10 ? '0' : ''}${seconds}`; // Format pour < 60 secondes
    } else if (value < 3600) {
      formattedDuration = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`; // Format pour < 60 minutes
    } else {
      formattedDuration = `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`; // Format pour >= 3600 secondes
    }
    
    return formattedDuration;
  }
}