import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Leo Messi';
  arreglo: number[] = [1,2,3,4,5];
  PI:number = Math.PI;
  porcentaje : number = 0.234;  
  salario:number = 1234.5;
  heroe = {
    nombre : 'Leo', 
    clave : 'Messi', 
    edad: 34, 
    direccion:{
      ciudad:'Barcelona', 
      casa: 40
    }
  }
  valorPromesa = new Promise<string> ((resolve) =>{
    setTimeout(() =>{
      resolve('llego la data'); 
    }, 4500);
  })
  fecha: Date = new Date();
  idioma :string = 'es'; 
  nombre2 : string = 'FeLIpE roJAS';
  videoURL : string = "https://www.youtube.com/embed/vd5xzIx-rsM"
  activar: boolean = false; 
}
