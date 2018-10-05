import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OfertasService } from './../../ofertas.service';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [OfertasService]
})
export class OndeFicaComponent implements OnInit {

  public ondeFica: string = '';

  constructor(
      private route: ActivatedRoute,
      private OfertasService: OfertasService
    ) { }

  ngOnInit() {
    this.OfertasService.getOndeFicaOfertaPorId(this.route.parent.snapshot.params['id'])
      .then((descricao: string ) => {
        this.ondeFica = descricao;
      });

  }

}
