import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    let variavel1: boolean = true;
    let variavel2: string;
        emitirMensagem(nome: string): void{
          alert('ola'+nome);
        }
    hello(): string{
      let retornar = 'ola';
      return retornar;
    }
}
