import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService]
})
export class OfertaComponent implements OnInit {

  public oferta: Oferta;

  constructor(
    private route: ActivatedRoute,
    private OfertasService: OfertasService
    ) {  }

  ngOnInit() {
    // *** Usando SnapShot
    //this.route.snapshot.params['id'];
    //this.route.snapshot.params['subId'];  // Caso necessário uso de subId
     //console.log('Id Recuperado da rota [snapshot]',this.route.snapshot.params['id']);
    this.OfertasService.getOfertaPorId(this.route.snapshot.params['id'])
     .then((oferta: Oferta)=>{
        //console.log(oferta);
        this.oferta = oferta;
     });

    // *** Usando subscribe
    // this.route.paramMap.subscribe((parametro: any) => {
    //   //console.log(parametro.id);
    // });

    // *** Usando Observable
    //  this.route.params.subscribe(
    //    (parametro: any)=>{ console.log(parametro); },
    //    (erro: any) => console.log(erro),
    //    () => console.log("Processamento classificado como concluído !")
    //  );

  }


}
