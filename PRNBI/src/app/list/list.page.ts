import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  constructor() {}

  ngOnInit() {}
  
  private inspecaoInterna = [{objeto: "Manche", acao: "Destravado", checado: false},
                            {objeto: "Freio de estacionamento", acao: "Aplicado", checado: false},
                            {objeto: "Interruptores", acao: "OFF", checado: false},
                            {objeto: "Magnetos", acao: "OFF", checado: false},
                            {objeto: "Equipamentos Eletrônicos", acao: "OFF", checado: false},
                            {objeto: "Mistura", acao: "Cortada", checado: false},
                            {objeto: "Master", acao: "ON", checado: false},
                            {objeto: "Liquidômetro", acao: "Verificar Quantidade", checado: false},
                            {objeto: "Trem de Pouso", acao: "Verificar lights", checado: false},
                            {objeto: "Master", acao: "OFF", checado: false},
                            {objeto: "Cowl Flap", acao: "Abertos", checado: false},
                            {objeto: "Comandos de Voo", acao: "Verificar Operação", checado: false},
                            {objeto: "Flap", acao: "Verificar Operação e recolher", checado: false},
                            {objeto: "Compensadores", acao: "Verificar operação e neutro", checado: false},
                            {objeto: "Sistema Pito Estático", acao: "Drenar", checado: false},
                            {objeto: "Cintos", acao: "Verificar condições e travamento", checado: false},
                            {objeto: "Janelas", acao: "Verificar limpeza", checado: false},
                            {objeto: "Documentos", acao: "Verificar à bordo", checado: false}]

}