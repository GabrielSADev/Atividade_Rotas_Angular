import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Pessoa } from 'src/app/app/pessoa';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-pessoasdetails',
  templateUrl: './pessoasdetails.component.html',
  styleUrls: ['./pessoasdetails.component.scss']
})
export class PessoasdetailsComponent {

  @Input() pessoa: Pessoa = new Pessoa();
  @Output() retorno = new EventEmitter<Pessoa>();

  pessoaService = inject(PessoaService);

  constructor(){
  
  }
  salvar(){
    this.pessoaService.save(this.pessoa).subscribe({
      next: pessoa => { // QUANDO DÁ CERTO
        this.retorno.emit(pessoa);
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
     });
  }
  deletar(){
    this.pessoaService.delete(this.pessoa.id).subscribe({
      next: pessoa => { // QUANDO DÁ CERTO
        this.retorno.emit(pessoa);
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });
  }

}
