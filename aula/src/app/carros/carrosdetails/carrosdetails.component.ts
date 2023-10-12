import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Carros } from '../carroslist/carros';
import { CarroService } from 'src/app/services/carro.service';

@Component({
  selector: 'app-carrosdetails',
  templateUrl: './carrosdetails.component.html',
  styleUrls: ['./carrosdetails.component.scss']
})
export class CarrosdetailsComponent {

  @Input() carro: Carros = new Carros();
  @Output() retorno = new EventEmitter<Carros>();

  carroService = inject(CarroService);

  constructor(){

  }
  salvar(){
    this.carroService.save(this.carro).subscribe({
      next: carro => {
        this.retorno.emit(carro);
      },
      error: erro => {
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });
  }
  deletar(){
    this.carroService.delete(this.carro.id).subscribe({
      next: carro => {
        this.retorno.emit(carro);
      },
      error: erro => {
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });
  }

}
