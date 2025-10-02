import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'country-list',
  standalone: true,
  imports: [CommonModule], // Agrega CommonModule aquí
  templateUrl: './country-list.component.html',
})
export class CountryListComponent {
  @Input() countries: Country[] = []; // Define la propiedad como entrada
  @Input() isLoading: boolean = false; // Agrega la propiedad isLoading como entrada

  trackByCca2(index: number, country: Country): string {
    return country.cca2;
  }
}
