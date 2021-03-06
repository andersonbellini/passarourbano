import { Oferta } from './../shared/oferta.model';
import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {

  public ofertas: Oferta[];

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    //this.ofertas = this.ofertasService.getOfertas();
    //console.log(this.ofertas);

    // this.ofertasService.getOfertas2()
    //   .then(
    //     (ofertas: Oferta[] ) => {
    //       console.log("Resolved after 3 seconds");
    //       this.ofertas = ofertas
    //     })
    //   .catch(
    //     ( param: any)  => {
    //       console.log(param)
    //     })

    this.ofertasService.getOfertas()
      .then(
        (ofertas: Oferta[] ) => {
          //console.log("Resolved after 3 seconds");
          this.ofertas = ofertas
        })
      .catch(
        ( param: any)  => {
          console.log(param)
        })

  }

}
