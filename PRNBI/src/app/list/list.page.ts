import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  constructor() {}

  ngOnInit() {}
  private preFlight = [{objeto: "Flight plan", acao: "Performed", checado: false, abrir: false},
  {objeto: "Weight and Balance", acao: "Performed", checado: false, abrir: false},
  {objeto: "Performance", acao: "Investigated", checado: false, abrir: false},
                      ]
  //Checks-lists objeto: objeto a ser checado, acao: Ação necessária ao objeto a ser checado, 
  //checado: inicador que determina se objeto foi checado, abrir: Condição para exibir ação no card
  private inspecaoInterna = [{objeto: "Paperwork ", acao: "Check on Board", checado: false, abrir: false},
                            {objeto: "Fire Extinguisher", acao: "Available", checado: false, abrir: false},
                            {objeto: "Windshild ", acao: "Checked and Clean", checado: false, abrir: false},
                            {objeto: "Seats and Seats belts", acao: "Cheked", checado: false, abrir: false},
                            {objeto: "Controls Loks", acao: "Removed", checado: false},
                            {objeto: "Landing Gear control", acao: "Down", checado: false, abrir: false},
                            {objeto: "Avionics", acao: "OFF", checado: false, abrir: false},
                            {objeto: "Master", acao: "ON", checado: false, abrir: false},
                            {objeto: "Landing Gear Lights", acao: "Three Green Light", checado: false, abrir: false},
                            {objeto: "Fuel Quantity", acao: "Check", checado: false, abrir: false},
                            {objeto: "Master", acao: "OFF", checado: false, abrir: false},
                            {objeto: "Fuel Selector", acao: "ON", checado: false, abrir: false},
                            {objeto: "Trims", acao: "Set Neutral", checado: false, abrir: false},
                            {objeto: "Flap", acao: "Check operation then Down", checado: false, abrir: false},
                            {objeto: "Cowl Flap", acao: "Open", checado: false, abrir: false},
                            {objeto: "Alternative Air", acao: "Close", checado: false, abrir: false},
                            {objeto: "Mixture Controls", acao: "Cuttoff", checado: false, abrir: false},
                            {objeto: "Propeller Controls", acao: "Full Forward", checado: false, abrir: false},
                            {objeto: "Throttle Controls", acao: "Idle", checado: false, abrir: false},
                            {objeto: "Magnetos ", acao: "OFF", checado: false, abrir: false},
                            {objeto: "Drain Pitot System", acao: "Performed", checado: false, abrir: false},
                            {objeto: "Crossfeed", acao: "Drain", checado: false, abrir: false},
                            {objeto: "Circuit Brakes", acao: "All In", checado: false, abrir: false},
                          ]

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
  




  //Checks-lists objeto: objeto a ser checado, acao: Ação necessária ao objeto a ser checado, 
  //checado: inicador que determina se objeto foi checado, abrir: Condição para exibir ação no card  
  private aposAcionamento = [{objeto: "Instrumentos do motor", acao: "ON", checado: false, abrir: false},
                             {objeto: "Mistura", acao: "Ajustar", checado: false, abrir: false},
                             {objeto: "Master", acao: "ON", checado: false, abrir: false},
                             {objeto: "Rádios", acao: "ON", checado: false, abrir: false},
                             {objeto: "Seletora esquerda", acao: "60s em X-FEED, após ON", checado: false, abrir: false},
                             {objeto: "Seletora direita", acao: "60s em X-FEED, após ON", checado: false, abrir: false},
                             {objeto: "Tranponder", acao: "STBY/2000", checado: false, abrir: false},]
  
  
  


  //Checks-lists objeto: objeto a ser checado, acao: Ação necessária ao objeto a ser checado, 
  //checado: inicador que determina se objeto foi checado, abrir: Condição para exibir ação no card
  private taxi = [{objeto: "Autorização de taxi", acao: "Obter", checado: false, abrir: false},
                    {objeto: "Luz de navegação", acao: "Como requerida", checado: false, abrir: false},
                    {objeto: "Luzes auxiliares", acao: "Como requerida", checado: false, abrir: false},
                    {objeto: "Briefing de taxi", acao: "Realizar", checado: false, abrir: false},
                    {objeto: "Área de taxi", acao: "Livre", checado: false, abrir: false},
                    {objeto: "Freios", acao: "Soltar", checado: false, abrir: false},
                    {objeto: "Manetes de potência", acao: "Avançar lentamente", checado: false, abrir: false},
                    {objeto: "Manetes de hélice", acao: "Max RPM", checado: false, abrir: false},
                    {objeto: "Freios", acao: "Checar operacional", checado: false, abrir: false},
                    {objeto: "Comando direcional", acao: "Verificar", checado: false, abrir: false},
                    {objeto: "Turn and Bank", acao: "Verificar", checado: false, abrir: false},
                    {objeto: "X-FEED", acao: "Checar ambas por 30s", checado: false, abrir: false}]
  
  //Checks-lists objeto: objeto a ser checado, acao: Ação necessária ao objeto a ser checado, 
  //checado: inicador que determina se objeto foi checado, abrir: Condição para exibir ação no card
  private ckl500 = [{objeto: "Instrumentos do motor", acao: "Faixa Verde", checado: false, abrir: false},
                    {objeto: "Bombas elétricas", acao: "OFF", checado: false, abrir: false},
                    {objeto: "Farol de pouso", acao: "OFF", checado: false, abrir: false},
                    {objeto: "Flaps", acao: "Recolhidos", checado: false, abrir: false},
                    {objeto: "Trem de pouso", acao: "Recolhidos e travados", checado: false, abrir: false},
                    {objeto: "Potência", acao: "24 Pol", checado: false, abrir: false},
                    {objeto: "Passo", acao: "2400 RPM", checado: false, abrir: false}]
  

  //Checks-lists objeto: objeto a ser checado, acao: Ação necessária ao objeto a ser checado, 
  //checado: inicador que determina se objeto foi checado, abrir: Condição para exibir ação no card
  private app = [{objeto: "Mistura", acao: "Rica", checado: false, abrir: false},
                 {objeto: "Manete de hélice", acao: "Max RPM", checado: false, abrir: false},
                 {objeto: "Bombas de Combustível", acao: "ON", checado: false, abrir: false},
                 {objeto: "Farol de Pouso", acao: "ON", checado: false, abrir: false},
                 {objeto: "Trem de pouso", acao: "Three Green light", checado: false, abrir: false},
                 {objeto: "Pista", acao: "Livre", checado: false, abrir: false}]
}

/* 
li>: <strong></strong></li>
          <li>: <strong></strong></li>
          <li>: <strong class="maiusculo">on</strong></li>
          <li>: <strong class="maiusculo">on</strong></li>
          <li>: <strong></strong></li>
          <li>: <strong></strong></li>
*/