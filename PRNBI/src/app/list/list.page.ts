import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  constructor() {}

  ngOnInit() {}
  //Checks-lists objeto: objeto a ser checado, acao: Ação necessária ao objeto a ser checado, 
  //checado: inicador que determina se objeto foi checado, abrir: Condição para exibir ação no card
  private inspecaoInterna = [{objeto: "Manche", acao: "Destravado", checado: false, abrir: false},
                            {objeto: "Freio de estacionamento", acao: "Aplicado", checado: false, abrir: false},
                            {objeto: "Interruptores", acao: "OFF", checado: false, abrir: false},
                            {objeto: "Magnetos", acao: "OFF", checado: false, abrir: false},
                            {objeto: "Equipamentos Eletrônicos", acao: "OFF", checado: false},
                            {objeto: "Mistura", acao: "Cortada", checado: false, abrir: false},
                            {objeto: "Master", acao: "ON", checado: false, abrir: false},
                            {objeto: "Liquidômetro", acao: "Verificar Quantidade", checado: false, abrir: false},
                            {objeto: "Trem de Pouso", acao: "Verificar lights", checado: false, abrir: false},
                            {objeto: "Master", acao: "OFF", checado: false, abrir: false},
                            {objeto: "Cowl Flap", acao: "Abertos", checado: false, abrir: false},
                            {objeto: "Comandos de Voo", acao: "Verificar Operação", checado: false, abrir: false},
                            {objeto: "Flap", acao: "Verificar Operação e recolher", checado: false, abrir: false},
                            {objeto: "Compensadores", acao: "Verificar operação e neutro", checado: false, abrir: false},
                            {objeto: "Sistema Pito Estático", acao: "Drenar", checado: false, abrir: false},
                            {objeto: "Cintos", acao: "Verificar condições e travamento", checado: false, abrir: false},
                            {objeto: "Janelas", acao: "Verificar limpeza", checado: false, abrir: false},
                            {objeto: "Documentos", acao: "Verificar à bordo", checado: false, abrir: false}]

  //Checks-lists objeto: objeto a ser checado, acao: Ação necessária ao objeto a ser checado, 
  //checado: inicador que determina se objeto foi checado, abrir: Condição para exibir ação no card
  private checkAcionamento = [{objeto: "Inspeção Pré-voo", acao: "Completa", checado: false, abrir: false},
                              {objeto: "Frio de estacionamento", acao: "Aplicado", checado: false, abrir: false},
                              {objeto: "Calços", acao: "Retirados", checado: false, abrir: false},
                              {objeto: "Flap", acao: "UP", checado: false, abrir: false},
                              {objeto: "Banco e cinto de segurança", acao: "Ajustados e travados", checado: false, abrir: false},
                              {objeto: "Porta", acao: "Fechada e tavada", checado: false, abrir: false},
                              {objeto: "CBs", acao: "Verificar armados", checado: false, abrir: false},
                              {objeto: "Bateria", acao: "ON", checado: false, abrir: false},
                              {objeto: "Master", acao: "ON", checado: false, abrir: false},
                              {objeto: "Rádio", acao: "ON", checado: false, abrir: false},
                              {objeto: "Autorização", acao: "Obter", checado: false, abrir: false},
                              {objeto: "Rádio", acao: "OFF", checado: false, abrir: false},
                              {objeto: "Master", acao: "OFF", checado: false, abrir: false},
                              {objeto: "Seletora de Combustível", acao: "Alavancas em ON", checado: false, abrir: false},
                              {objeto: "Cowl Flap", acao: "Abertos", checado: false, abrir: false},
                              {objeto: "Ar alternado", acao: "Fechada", checado: false, abrir: false},
                              {objeto: "Mistura", acao: "Rica", checado: false, abrir: false},
                              {objeto: "Manetes de Hélice (passo)", acao: "Máx RPM", checado: false, abrir: false},
                              {objeto: "Manete de potência", acao: "Abrir +/- 1,5cm", checado: false, abrir: false},
                              {objeto: "Beacon", acao: "ON", checado: false, abrir: false}]

  //Checks-lists objeto: objeto a ser checado, acao: Ação necessária ao objeto a ser checado, 
  //checado: inicador que determina se objeto foi checado, abrir: Condição para exibir ação no card
  //oleo: condição para exibição da mensagem do oleo no card
  private motorEsquerdo = [{objeto: "Magnetos", acao: "ON", checado: false, abrir: false, oleo: false},
                           {objeto: "Bomba elétrica", acao: "ON 3s, após OFF", checado: false, abrir: false, oleo: false},
                           {objeto: "Mistura", acao: "Cortar", checado: false, abrir: false, oleo: false},
                           {objeto: "Área da hélice", acao: "Livre", checado: false, abrir: false, oleo: false},
                           {objeto: "Starter", acao: "Engage", checado: false, abrir: false, oleo: false},
                           {objeto: "Mistura", acao: "Avançar após motor funcionar", checado: false, abrir: false, oleo: false},
                           {objeto: "Pressão Óleo", acao: "Checar", checado: false, abrir: false, oleo: true},
                           {objeto: "RPM", acao: "1000 RPM", checado: false, abrir: false, oleo: false},
                           {objeto: "Alternador", acao: "ON", checado: false, abrir: false, oleo: false}]
                           
  //Checks-lists objeto: objeto a ser checado, acao: Ação necessária ao objeto a ser checado, 
  //checado: inicador que determina se objeto foi checado, abrir: Condição para exibir ação no card
  //oleo: condição para exibição da mensagem do oleo no card
  private motorDireito = [{objeto: "Magnetos", acao: "ON", checado: false, abrir: false},
                          {objeto: "Bomba elétrica", acao: "ON 3s, após OFF", checado: false, abrir: false, oleo: false},
                          {objeto: "Mistura", acao: "Cortar", checado: false, abrir: false, oleo: false},
                          {objeto: "Área da hélice", acao: "Livre", checado: false, abrir: false, oleo: false},
                          {objeto: "Starter", acao: "Engage", checado: false, abrir: false, oleo: false},
                          {objeto: "Mistura", acao: "Avançar após motor funcionar", checado: false, abrir: false, oleo: false},
                          {objeto: "Pressão Óleo", acao: "Checar", checado: false, abrir: false, oleo: true},
                          {objeto: "RPM", acao: "1000 RPM", checado: false, abrir: false, oleo: false},
                          {objeto: "Alternador", acao: "ON", checado: false, abrir: false, oleo: false}]
  
  
  
  
  
  
  private teste3 = []
  private teste2 = []
  private teste1 = []

}