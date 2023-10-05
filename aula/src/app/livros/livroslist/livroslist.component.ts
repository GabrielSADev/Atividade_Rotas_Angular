import { Component } from '@angular/core';
import { Livros } from './livros';

@Component({
  selector: 'app-livroslist',
  templateUrl: './livroslist.component.html',
  styleUrls: ['./livroslist.component.scss']
})
export class LivroslistComponent {
  listaLivros: Livros[] =[];

  constructor(){
    let livros1: Livros = new Livros();
    livros1.id = 1;
    livros1.autor = 'Stephen'
    livros1.titulo = 'TorreNegra'

    let livros2: Livros = new Livros();
    livros2.id = 2;
    livros2.autor = 'David'
    livros2.titulo = 'CleanCode'

    let livros3: Livros = new Livros();
    livros3.id = 3;
    livros3.autor = 'Laurence'
    livros3.titulo = 'PercyJackson'

    this.listaLivros.push(livros1);
    this.listaLivros.push(livros2);
    this.listaLivros.push(livros3);
  }

}
