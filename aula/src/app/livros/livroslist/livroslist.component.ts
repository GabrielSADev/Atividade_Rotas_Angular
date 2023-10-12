import { Component, inject } from '@angular/core';
import { Livros } from './livros';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-livroslist',
  templateUrl: './livroslist.component.html',
  styleUrls: ['./livroslist.component.scss']
})
export class LivroslistComponent {
  listaLivros: Livros[] =[];

  livroSelecionadoParaEdicao: Livros = new Livros();
  indiceSelecionadoParaEdicao!: number;

  modalService = inject(NgbModal);
  livroService = inject(LivroService);

  constructor(){
    this.listAll();
  }

  listAll(){
    this.livroService.listAll().subscribe({
      next: listaLivros => {
        this.listaLivros = listaLivros;
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
    }
  });

  }

  exemploErro(){
    this.livroService.exemploErroLivro().subscribe({
      next: listaLivros => { // QUANDO DÁ CERTO
        this.listaLivros = listaLivros;
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Observe o erro no console!');
        console.error(erro);
      }
    });
  }

  adicionar(modal: any){
    this.livroSelecionadoParaEdicao = new Livros();
    this.modalService.open(modal, {size: 'lg'});
  }

  editar(modal: any, livro: Livros, indice: number){
    this.livroSelecionadoParaEdicao = Object.assign({},livro);
    this.indiceSelecionadoParaEdicao = indice;

    this.modalService.open(modal, {size: 'lg'});
  }

  addOuEditarLivros(livro: Livros){
      this.listAll();
      this.modalService.dismissAll();
  }

  excluir(id: number){
    this.livroService.delete(id).subscribe({
      next: retorno => { // QUANDO DÁ CERTO
        alert('excluído com sucesso!');
          this.listAll();        
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });
  }
}
