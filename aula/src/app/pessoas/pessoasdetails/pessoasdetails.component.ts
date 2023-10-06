import { Component, EventEmitter, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pessoa } from 'src/app/app/pessoa';

@Component({
  selector: 'app-pessoasdetails',
  templateUrl: './pessoasdetails.component.html',
  styleUrls: ['./pessoasdetails.component.scss']
})
export class PessoasdetailsComponent {

  route = inject(ActivatedRoute);
  pessoa: Pessoa = new Pessoa();

  @Output() retorno = new EventEmitter<Pessoa>();

  constructor(){
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);
  }
  salvar(){
    this.retorno.emit(this.pessoa);
    alert('Salvo com Sucesso!!');
  
  }

}
