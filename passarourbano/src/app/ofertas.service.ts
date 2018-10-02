import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Oferta } from './shared/oferta.model';

//import 'rxjs/add/operator/toPromise'

@Injectable()
export class OfertasService {

  constructor(private http: Http){}


  public getOfertas(): Promise<Oferta[]> {

    //Requisição HTTP e Retorna promisse Oferta[]
    return this.http.get('http://localhost:3000/ofertas?destaque=true')
      .toPromise()
      .then((resposta: any) => resposta.json())
  }

  public getOfertasPorCategoria(categoria: string) : Promise<Oferta[]> {
    return this.http.get(`http://localhost:3000/ofertas?categoria=${categoria}`)
    .toPromise()
    .then((resposta: any) => resposta.json());
  }

  public getOfertaPorId(id: number): Promise<Oferta> {
    return this.http.get(`http://localhost:3000/ofertas?id=${id}`)
      .toPromise()
      .then((resposta: any) => resposta.json()[0]); // ou  //.then((resposta: any) => resposta.json().shift());
  }


}


  // public getOfertas() : Array<Oferta> {
  //   return this.ofertas;

  // }

  // // Comentado para utilização dos dados usando JSON Server
  // //public ofertas: Array<Oferta> = [
  // public ofertas: Oferta[] = [
  //   {
  //     id: 1,
  //     categoria: "restaurante",
  //     titulo: "Super Burger",
  //     descricao_oferta: "Rodízio de Mini-hambúrger com opção de entrada.",
  //     anunciante: "Original Burger",
  //     valor: 29.90,
  //     destaque: true,
  //     imagens: [
  //       {url: "/assets/ofertas/1/img1.jpg"},
  //       {url: "/assets/ofertas/1/img2.jpg"},
  //       {url: "/assets/ofertas/1/img3.jpg"},
  //       {url: "/assets/ofertas/1/img4.jpg"}
  //     ]
  //   },
  //   {
  //     id: 2,
  //     categoria: "restaurante",
  //     titulo: "Cozinha Mexicana",
  //     descricao_oferta: "Almoço ou Jantar com Rodízio Mexicano delicioso.",
  //     anunciante: "Mexicana",
  //     valor: 32.90,
  //     destaque: true,
  //     imagens: [
  //       {url: "/assets/ofertas/2/img1.jpg"},
  //       {url: "/assets/ofertas/2/img2.jpg"},
  //       {url: "/assets/ofertas/2/img3.jpg"},
  //       {url: "/assets/ofertas/2/img4.jpg"}
  //     ]

  //   },
  //   {
  //     id: 4,
  //     categoria: "diversao",
  //     titulo: "Estância das águas",
  //     descricao_oferta: "Diversão garantida com piscinas, trilhas e muito mais.",
  //     anunciante: "Estância das águas",
  //     valor: 31.90,
  //     destaque: true,
  //     imagens: [
  //       {url: "/assets/ofertas/3/img1.jpg"},
  //       {url: "/assets/ofertas/3/img2.jpg"},
  //       {url: "/assets/ofertas/3/img3.jpg"},
  //       {url: "/assets/ofertas/3/img4.jpg"},
  //       {url: "/assets/ofertas/3/img5.jpg"},
  //       {url: "/assets/ofertas/3/img6.jpg"}
  //     ]
  //   }
  // ];


  // public getOfertas2(): Promise<Oferta[]> {
  //   return new Promise((resolve, reject)=>{
  //     //Processamento pela API
  //     console.log("passou por aqui? ");
  //     let deu_erro_na_api= true; // é o retorno da api do servidor

  //     if (deu_erro_na_api){
  //          // resolve(this.ofertas);
  //           setTimeout(()=>{resolve(this.ofertas)}, 3000); //3000); //Simulando delay de processamento
  //     }
  //     else{
  //           reject({codigo_erro: 404, mensagem_erro: 'Servidor não encontrado'});
  //     }
  //   }).then((ofertas: Oferta[]) => {
  //     //faz mais algumas tratativas antes de devolver a chamada!
  //     console.log("Primeiro THEN");
  //     return ofertas;
  //   })
  //   .then((ofertas: Oferta[]) => {
  //     //faz mais outras tratativas depois chamada!
  //     console.log("Segundo THEN");
  //     return new Promise((resolve2, reject2) =>{
  //       setTimeout(()=>{resolve2(ofertas)}, 10); //3000);
  //     });
  //   })
  //   .then((ofertas: Oferta[]) => {
  //     console.log("Terceiro THEN de 3S, após resolução da promise");
  //     return ofertas;
  //   });
  // }

