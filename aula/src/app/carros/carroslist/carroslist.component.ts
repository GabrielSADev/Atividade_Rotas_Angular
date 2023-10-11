import { Component, inject } from '@angular/core';
import { Carros } from './carros';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CarroService } from 'src/app/services/carro.service';

@Component({
  selector: 'app-carroslist',
  templateUrl: './carroslist.component.html',
  styleUrls: ['./carroslist.component.scss']
})
export class CarroslistComponent {

  listaCarros: Carros[] = [];

  carroSelecionadoParaEdicao: Carros = new Carros();
  indiceSelecionadoParaEdicao!: number;

  modalService = inject(NgbModal);
  carroService = inject(CarroService);

  constructor(){
   this.listAll();
  }

  listAll(){
    this.carroService.listAll().subscribe({
      next: listaCarros => {
        this.listaCarros = listaCarros;
      },
      error: erro => {
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });
  }

  exemploErro(){
    this.carroService.exemploErroPessoa().subscribe({
      next: listaCarros => {
        this.listaCarros = listaCarros;
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Observe o erro no console!');
        console.error(erro);
      }
    });
  }

  adicionar(modal:any){
    this.carroSelecionadoParaEdicao = new Carros();

    this.modalService.open(modal, {size: 'lg'});
  }

  editar(modal:any, carro: Carros, indice: number){
    this.carroSelecionadoParaEdicao = Object.assign({}, carro);
    this.indiceSelecionadoParaEdicao = indice;

    this.modalService.open(modal, {size: 'lg'});
  }
  addOuEditarCarro(carro: Carros){
    this.listAll();
    this.modalService.dismissAll();
  }

}
