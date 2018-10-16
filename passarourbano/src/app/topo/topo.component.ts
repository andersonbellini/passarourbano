import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>
  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
  }

    // public pesquisa(termoDaPesquisa : string): void {
    //  //console.log(termoDaPesquisa);
    //  this.ofertas = this.ofertasService.pesquisaOferta(termoDaPesquisa);

    //  this.ofertas.subscribe(
    //    (ofertas: Oferta[]) => console.log(this.ofertas)
    //    );

    // }

    public pesquisa(termoDaBusca: string) : void {

      // Observavel
      this.ofertas = this.ofertasService.pesquisaOferta(termoDaBusca)

      // Observador
      this.ofertas.subscribe(
        (ofertas: Oferta[]) => {
          console.log(ofertas)
        },
        (error: string) => {
          console.log("Erro na pesquisa. Erro: " + error)
        }, () => {
          console.log("Termino do fluxo da stream")
        })
    }

}
