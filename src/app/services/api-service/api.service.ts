import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly URL = "https://pokeapi.co/api/v2/pokemon"

  constructor(private http: HttpClient) {}
  
  getData(){
    // return fetch(this.URL)
    // .then(resp => resp.json())
    // .then(data => data.results)
    // .then(results => results[0])
    // .then(pokemon => pokemon.name)

    return this.http.get<any>(this.URL).pipe(
      tap(data => console.log(data)),
      map(data => data.results)
      // map(results => results[0]),
      // map(pokemon => pokemon.name)
    )
  }
}
