import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor() {
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  ngOnInit() {
  }
  checado = false
  
  private teste = [{nome: "A1", oi: "outra coisa0", checado: false},
                   {nome: "A2", oi: "outra coisa1", checado: false},
                   {nome: "A3", oi: "outra coisa2", checado: false},
                   {nome: "A4", oi: "outra coisa3", checado: false},
                   {nome: "A5", oi: "outra coisa4", checado: false},
                   {nome: "A6", oi: "outra coisa5", checado: false},
                   {nome: "A7", oi: "outra coisa6", checado: false}]

}
