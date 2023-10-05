import { Component } from '@angular/core';
import { Pessoa } from '../../pessoa';

@Component({
  selector: 'app-pessoaslist',
  templateUrl: './pessoaslist.component.html',
  styleUrls: ['./pessoaslist.component.scss']
})
export class PessoaslistComponent {
  lista: Pessoa[] = [];

  constructor(){
    let pessoa1: Pessoa = new Pessoa();
    pessoa1.id = 1;
    pessoa1.nome = 'Novinha';
    pessoa1.idade = 19;

    let pessoa2: Pessoa = new Pessoa();
    pessoa2.id = 2;
    pessoa2.nome = 'Duble';
    pessoa2.idade = 39;

    let pessoa3: Pessoa = new Pessoa();
    pessoa3.id = 3;
    pessoa3.nome = 'Chaves';
    pessoa3.idade = 22;

    let pessoa4: Pessoa = new Pessoa();
    pessoa4.id = 4;
    pessoa4.nome = 'Quarto';
    pessoa4.idade = 32;

    let pessoa5: Pessoa = new Pessoa();
    pessoa5.id = 5;
    pessoa5.nome = 'Peitin';
    pessoa5.idade = 8;

    let pessoa6: Pessoa = new Pessoa();
    pessoa6.id = 6;
    pessoa6.nome = 'Darius';
    pessoa6.idade = 40;

    let pessoa7: Pessoa = new Pessoa();
    pessoa7.id = 7;
    pessoa7.nome = 'Yasuo';
    pessoa7.idade = 33;

    let pessoa8: Pessoa = new Pessoa();
    pessoa8.id = 8;
    pessoa8.nome = 'Gabriel';
    pessoa8.idade = 19;

    let pessoa9: Pessoa = new Pessoa();
    pessoa9.id = 9;
    pessoa9.nome = 'Laranja';
    pessoa9.idade = 88;

    let pessoa10: Pessoa = new Pessoa();
    pessoa10.id = 10;
    pessoa10.nome = 'Trompete';
    pessoa10.idade = 39;

    this.lista.push(pessoa1);
    this.lista.push(pessoa2);
    this.lista.push(pessoa3);
    this.lista.push(pessoa4);
    this.lista.push(pessoa5);
    this.lista.push(pessoa6);
    this.lista.push(pessoa7);
    this.lista.push(pessoa8);
    this.lista.push(pessoa9);
    this.lista.push(pessoa10);


  }

}
