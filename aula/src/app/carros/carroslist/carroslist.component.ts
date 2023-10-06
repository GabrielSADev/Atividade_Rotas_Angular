import { Component, inject } from '@angular/core';
import { Carros } from './carros';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carroslist',
  templateUrl: './carroslist.component.html',
  styleUrls: ['./carroslist.component.scss']
})
export class CarroslistComponent {

  listaCarros: Carros[] = [];

  modalService = inject(NgbModal);

  constructor(){
    let carro1: Carros = new Carros();
    carro1.nome = 'subaru';
    carro1.ano = 1999;

    let carro2: Carros = new Carros();
    carro2.nome = 'mustang';
    carro2.ano = 1947;

    let carro3: Carros = new Carros();
    carro3.nome = 'sandero';
    carro3.ano = 2023;

    this.listaCarros.push(carro1);
    this.listaCarros.push(carro2);
    this.listaCarros.push(carro3);
  }

  abrirModal(abc: any){
    this.modalService.open(abc, { size: 'lg' });
  }

  addNaLista(carros: Carros){
    this.listaCarros.push(carros);
    this.modalService.dismissAll();
  }

}
