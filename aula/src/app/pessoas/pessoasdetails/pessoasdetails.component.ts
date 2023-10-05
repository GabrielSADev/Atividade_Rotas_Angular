import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pessoa } from 'src/app/app/pessoa';

@Component({
  selector: 'app-pessoasdetails',
  templateUrl: './pessoasdetails.component.html',
  styleUrls: ['./pessoasdetails.component.scss']
})
export class PessoasdetailsComponent {

  route = inject(ActivatedRoute);
  pessoa!: Pessoa;

  constructor(){
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    
  }

}
