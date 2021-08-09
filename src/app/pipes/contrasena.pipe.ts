import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar:boolean): string {
    if(activar){
      let aux =''; 
      for(let i = 0; i<value.length; i++){
        aux = aux + "*"; 
      } 
      value = aux;  
    }
    return value; 
  }
}
