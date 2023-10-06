import { Component, inject } from '@angular/core';
import { Livros } from './livros';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-livroslist',
  templateUrl: './livroslist.component.html',
  styleUrls: ['./livroslist.component.scss']
})
export class LivroslistComponent {
  listaLivros: Livros[] =[];

  modalService = inject(NgbModal);

  constructor(){
    let livros1: Livros = new Livros();
    livros1.autor = 'Stephen'
    livros1.titulo = 'TorreNegra'

    let livros2: Livros = new Livros();
    livros2.autor = 'David'
    livros2.titulo = 'CleanCode'

    let livros3: Livros = new Livros();
    livros3.autor = 'Laurence'
    livros3.titulo = 'PercyJackson'

    this.listaLivros.push(livros1);
    this.listaLivros.push(livros2);
    this.listaLivros.push(livros3);
  }

  abrirModal(abc: any){
    this.modalService.open(abc, { size: 'lg' });
  }
  addNaLista(livros: Livros){
    this.listaLivros.push(livros);
    this.modalService.dismissAll();
  }
}
