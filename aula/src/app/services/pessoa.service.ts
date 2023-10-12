import { HttpClient, HttpParams, HttpStatusCode } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from '../app/pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  
  API: string  = 'http://localhost:8080/api/pessoa';

  http = inject(HttpClient);

  constructor() { }

  listAll(): Observable<Pessoa[]>{
    return this.http.get<Pessoa[]>(this.API);
  }
  save(pessoa: Pessoa): Observable<Pessoa>{
    return this.http.post<Pessoa>(this.API, pessoa);
  }
  delete(id: number): Observable<any>{
    let params = new HttpParams()
    .set('id', id.toString());

  return this.http.delete<any>(this.API, {params: params} ); 
 }



  exemploErroPessoa(): Observable<Pessoa[]>{
    return this.http.get<Pessoa[]>(this.API + '/erro');

  }
}
