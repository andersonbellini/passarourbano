import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { switchMap } from 'rxjs/internal/operators/switchMap';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { of } from 'rxjs';

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
  private subjectPesquisa: Subject<string> = new Subject<string>()

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
     //retorno Oferta[]
      this.ofertas = this.subjectPesquisa.pipe(
        debounceTime(1000), //Executa a ação do switchMap após 1s
        distinctUntilChanged(),
        switchMap((termo: string) => {
          console.log('Requisição http para API: ', termo);

          if(termo.trim() === ''){
            //retornar observable de array de ofertas vazio
            //return Observable.of<Oferta[]>([]]); //Usando no Angular 4
            return of<Oferta[]>([]); // No Angular 6 - para não pesquisar a base full
          }

          return this.ofertasService.pesquisaOfertas(termo);
        })
      )
      this.ofertas.subscribe((ofertas: Oferta[]) => { console.log('ofertas: ', ofertas); } )

  }

    // public pesquisa(termoDaPesquisa : string): void {
    //  //console.log(termoDaPesquisa);
    //  this.ofertas = this.ofertasService.pesquisaOferta(termoDaPesquisa);

    //  this.ofertas.subscribe(
    //    (ofertas: Oferta[]) => console.log(this.ofertas)
    //    );

    // }

    public pesquisa(termoDaBusca: string) : void {

      console.log('keyup caracter ', termoDaBusca);
      // // Observavel
      // this.ofertas = this.ofertasService.pesquisaOferta(termoDaBusca)

      // // Observador
      // this.ofertas.subscribe(
      //   (ofertas: Oferta[]) => {
      //     console.log(ofertas)
      //   },
      //   (error: string) => {
      //     console.log("Erro na pesquisa. Erro: " + error)
      //   }, () => {
      //     console.log("Termino do fluxo da stream")
      //   })

      this.subjectPesquisa.next(termoDaBusca);

    }

}
