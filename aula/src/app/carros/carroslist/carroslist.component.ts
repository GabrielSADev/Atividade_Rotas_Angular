import { Component } from '@angular/core';
import { Carros } from './carros';

@Component({
  selector: 'app-carroslist',
  templateUrl: './carroslist.component.html',
  styleUrls: ['./carroslist.component.scss']
})
export class CarroslistComponent {

  listaCarros: Carros[] = [];

  constructor(){
    let carro1: Carros = new Carros();
    carro1.id = 1;
    carro1.nome = 'subaru';
    carro1.ano = 1999;

    let carro2: Carros = new Carros();
    carro2.id = 2;
    carro2.nome = 'mustang';
    carro2.ano = 1947;

    let carro3: Carros = new Carros();
    carro3.id = 3;
    carro3.nome = 'sandero';
    carro3.ano = 2023;

    this.listaCarros.push(carro1);
    this.listaCarros.push(carro2);
    this.listaCarros.push(carro3);
  }

}
