import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pintura',
  templateUrl: './pintura.component.html',
  styleUrls: ['./pintura.component.css']
})
export class PinturaComponent implements OnInit {
  @Input() dynamicParams: any = {
    "nombre": "Mona Lisa",
    "autor": "Leonardo da Vinci",
    "img": "assets/imgs/hotbook-113.jpg", 
    "descripcion": "texto descripcion"
  }

  constructor() { }

  ngOnInit() {
  }

}
