import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { RESTCountry } from '../../interfaces/rest-countries-interfaces';

@Component({
  selector: 'country-list',
  standalone: true,
  imports: [CommonModule], // Agrega CommonModule aquí
  templateUrl: './country-list.component.html',
})
export class CountryListComponent {
  @Input() countries: RESTCountry[] = []; // Define la propiedad como entrada

  trackByCca2(index: number, country: RESTCountry): string {
    return country.cca2;
  }
}
