import { Component, Input } from '@angular/core';
import { CommonModule, DecimalPipe, NgFor, NgIf } from '@angular/common'; // Importa CommonModule
import { Country } from '../../interfaces/country.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'country-list',
  standalone: true,
  imports: [NgFor, DecimalPipe, RouterLink, NgIf], // Agrega CommonModule aquí
  templateUrl: './country-list.component.html',
})
export class CountryListComponent {
  @Input() countries: Country[] = []; // Define la propiedad como entrada
  @Input() isLoading: boolean = false; // Agrega la propiedad isLoading como entrada

  trackByCca2(index: number, country: Country): string {
    return country.cca2;
  }
}
