import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Carros } from '../carros/carroslist/carros';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  API: string  = 'http://localhost:8080/api/carro';

  http = inject(HttpClient);

  constructor() { }

  listAll(): Observable<Carros[]>{
    return this.http.get<Carros[]>(this.API);
  }
  save(carro: Carros): Observable<Carros>{
    return this.http.post<Carros>(this.API, carro);
  }
  exemploErroPessoa(): Observable<Carros[]>{
    return this.http.get<Carros[]>(this.API + '/erro');
  }
}
