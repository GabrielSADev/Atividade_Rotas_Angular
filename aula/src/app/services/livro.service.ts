import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Livros } from '../livros/livroslist/livros';

@Injectable({
  providedIn: 'root'
})
export class LivroService {
    
  API: string  = 'http://localhost:8080/api/livro';

  http = inject(HttpClient);

  constructor() { }

  listAll(): Observable <Livros[]>{
    return this.http.get<Livros[]>(this.API);
  }
  save(livro: Livros): Observable<Livros>{
    return this.http.post<Livros>(this.API, livro);
  }
  exemploErroLivro(): Observable<Livros[]>{
    return this.http.get<Livros[]>(this.API + '/erro');
  }
}
