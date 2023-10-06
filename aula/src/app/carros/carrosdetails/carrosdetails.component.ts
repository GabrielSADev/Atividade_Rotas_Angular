import { Component, EventEmitter, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Carros } from '../carroslist/carros';

@Component({
  selector: 'app-carrosdetails',
  templateUrl: './carrosdetails.component.html',
  styleUrls: ['./carrosdetails.component.scss']
})
export class CarrosdetailsComponent {

  route = inject(ActivatedRoute);
  carros: Carros = new Carros();

  @Output() retorno = new EventEmitter<Carros>();

  constructor(){
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);
  }
  salvar(){
    this.retorno.emit(this.carros)
    alert('Carro salvo com sucesso!!');
  }

}
