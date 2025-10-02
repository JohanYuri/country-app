import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RESTCountry } from '../interfaces/rest-countries-interfaces';
import { map, Observable, catchError, throwError, delay } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CountryMapper } from '../mappers/country.mappers';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private http = inject(HttpClient);


  searchByCapital(query: string): Observable<Country[]> {

    query = query.toLocaleLowerCase();


    return this.http
      .get<RESTCountry[]>(`${API_URL}/capital/${query}`)
      .pipe(
        map(resp => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
        catchError(error =>{
          console.log('Error fetching ', error);

          return throwError(() => new Error(`No se pudo obtener países con el query: ${query}`));
        })
      );

  }


  searchByCountry( query: string ): Observable<Country[]> {
    query = query.toLowerCase();

    return this.http.get<RESTCountry[]>(`${ API_URL }/name/${ query }`)
    .pipe(
      map(resp => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
      delay(500),
      catchError(error =>{
        console.error('Error fetching countries:', error);
        return throwError(() => new Error(`No se encuentran coincidencias de: "${ query }"`));
      })
    )
  }
}
