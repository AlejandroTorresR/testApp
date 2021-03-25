import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pinturas: Array<any> = [];
  constructor(private service: MainService) {

  }

  ngOnInit(){
    this.getPictures();  
  }

  getPictures(){
    this.service.obtenerPinturas().subscribe((res:any)=>{
      this.pinturas = res.pinturas;
    })
  }

}
