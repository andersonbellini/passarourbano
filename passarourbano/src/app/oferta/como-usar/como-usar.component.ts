import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from './../../ofertas.service';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [OfertasService]
})
export class ComoUsarComponent implements OnInit {

  public comoUsar: string = '';

  constructor(
      private route: ActivatedRoute,
      private OfertasService: OfertasService
    ) { }

  ngOnInit() {
    //console.log('Id da rota pai',this.route.parent.snapshot.parent['id']);
    this.OfertasService.getComoUsarOfertaPorId(this.route.parent.snapshot.params['id'])
      .then((descricao: string ) => {
        //console.log(resposta);
        this.comoUsar = descricao;
      });

  }

}
