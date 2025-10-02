import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { CountryListComponent } from '../../components/country-list/country-list.component';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country-page',
  standalone: true,
  imports: [CommonModule, SearchInputComponent, CountryListComponent], // Agrega CommonModule aquí
  templateUrl: './by-country-page.component.html',
})
export class ByCountryPageComponent {
  CountryService = inject(CountryService);

  isLoading = signal(false);
  isError = signal<string | null>(null);
  countries = signal<Country[]>([]);

  onSearch(query: string) {
    if (this.isLoading()) return;
    this.isLoading.set(true);
    this.isError.set(null);

    console.log({ query });
    this.CountryService.searchByCountry(query).subscribe({
      next: (countries) => {
        this.isLoading.set(false);
        this.countries.set(countries);
      },
      error: (err) => {
        this.isLoading.set(false);
        this.countries.set([]);
        this.isError.set(err);
      },
    });
  }
}
