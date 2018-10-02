import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent implements OnInit {

  constructor(private route: ActivatedRoute) {  }

  ngOnInit() {
    // *** Usando SnapShot
    //this.route.snapshot.params['id'];
    //this.route.snapshot.params['subId'];  // Caso necessário uso de subId

    // *** Usando subscribe
    this.route.paramMap.subscribe((parametro: any) => {
      //console.log(parametro.id);

    });


  }


}
