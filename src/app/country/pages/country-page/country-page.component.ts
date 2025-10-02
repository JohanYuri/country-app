import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface'; // Assuming you have a Country interface
import { NgIf } from '@angular/common';
import { CountryInformationComponent } from './country-information/country-information.component';
import { NotFoundComponent } from 'src/app/shared/not-found/not-found.component';

@Component({
  selector: 'app-country-page',
  standalone: true,
  imports: [ NgIf,NotFoundComponent, CountryInformationComponent],
  templateUrl: './country-page.component.html',
})

export class CountryPageComponent {
  isError = signal<string | null>(null);
  isLoading = signal (false);

  public country?: Country;
  countryCode = inject(ActivatedRoute).snapshot.paramMap.get('code');
  countryService = inject(CountryService);
  // isSuccess: any;

  ngOnInit(): void {
    if (!this.countryCode) return;

    this.countryService.searchByCountryByAlphaCode(this.countryCode)
      .subscribe({
        next: country => {
          this.country = country;
          console.log({ country });
        },
        error: err => {
          this.isError.set(err);
          console.log(err);
        }
      })
  }

}
