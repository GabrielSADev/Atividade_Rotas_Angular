import { Component, EventEmitter, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Livros } from '../livroslist/livros';

@Component({
  selector: 'app-livrosdetails',
  templateUrl: './livrosdetails.component.html',
  styleUrls: ['./livrosdetails.component.scss']
})
export class LivrosdetailsComponent {

  route = inject(ActivatedRoute);
  livros: Livros = new Livros();

  @Output() retorno = new EventEmitter<Livros>();

  constructor(){
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);
  }
  salvar(){
    this.retorno.emit(this.livros);
    alert('Livro salvo com Sucesso!!');

  }

}
