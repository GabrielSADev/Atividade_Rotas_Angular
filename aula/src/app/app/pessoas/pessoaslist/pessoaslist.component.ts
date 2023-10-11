import { Component, inject } from '@angular/core';
import { Pessoa } from '../../pessoa';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-pessoaslist',
  templateUrl: './pessoaslist.component.html',
  styleUrls: ['./pessoaslist.component.scss']
})
export class PessoaslistComponent {
  lista: Pessoa[] = [];

  pessoaSelecionadaParaEdicao: Pessoa = new Pessoa();
  indiceSelecionadoParaEdicao!: number;

  modalService = inject(NgbModal);
  pessoaService = inject(PessoaService);


  constructor(){
    this.listAll();
  }

  listAll() {

    this.pessoaService.listAll().subscribe({
      next: lista => { // QUANDO DÁ CERTO
        this.lista = lista;
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });

  }

  exemploErro() {

      this.pessoaService.exemploErroPessoa().subscribe({
        next: lista => { // QUANDO DÁ CERTO
          this.lista = lista;
        },
        error: erro => { // QUANDO DÁ ERRO
          alert('Observe o erro no console!');
          console.error(erro);
        }
      });
  }

  adicionar(modal: any) {
    this.pessoaSelecionadaParaEdicao = new Pessoa();

    this.modalService.open(modal, { size: 'lg' });
  }

  editar(modal: any, pessoa: Pessoa, indice: number) {
    this.pessoaSelecionadaParaEdicao = Object.assign({}, pessoa); //clonando o objeto se for edição...
    this.indiceSelecionadoParaEdicao = indice;

    this.modalService.open(modal, { size: 'lg' });
  }

  addOuEditarPessoa(pessoa: Pessoa) {

    this.listAll();
    this.modalService.dismissAll();

  }
  
}
