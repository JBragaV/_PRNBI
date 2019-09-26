import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  constructor() {}

  ngOnInit() {}

  normal = false;
  emergencia = false;

  checkList( event ){
    console.log(event.detail.value)
    let parametro = event.detail.value
    if(parametro == "normal"){
      this.normal = true;
      this.emergencia = false;
    }else{
      this.normal = false;
      this.emergencia = true;
    }
  }

  //Checks-lists objeto: objeto a ser checado, acao: Ação necessária ao objeto a ser checado, 
  //checado: inicador que determina se objeto foi checado, abrir: Condição para exibir ação no card
  private preFlight = [{objeto: "Flight plan", acao: "Performed", checado: false, abrir: false},
  {objeto: "Weight and Balance", acao: "Performed", checado: false, abrir: false},
  {objeto: "Performance", acao: "Investigated", checado: false, abrir: false}]

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
                            {objeto: "Circuit Brakes", acao: "All In", checado: false, abrir: false}]

  //Checks-lists objeto: objeto a ser checado, acao: Ação necessária ao objeto a ser checado, 
  //checado: inicador que determina se objeto foi checado, abrir: Condição para exibir ação no card
  private checkAcionamento = [{objeto: "Preflight Inspection", acao: "Completed", checado: false, abrir: false},
                              {objeto: "Brakes", acao: "Hold", checado: false, abrir: false},
                              {objeto: "Wheel Chock", acao: "Removed", checado: false, abrir: false},
                              {objeto: "Flap", acao: "UP", checado: false, abrir: false},
                              {objeto: "Door ", acao: "Close", checado: false, abrir: false},
                              {objeto: "Seat/Seat Belts", acao: "Adjusted", checado: false, abrir: false},
                              {objeto: "Master", acao: "ON", checado: false, abrir: false},
                              {objeto: "Avionics", acao: "ON", checado: false, abrir: false},
                              {objeto: "Radio", acao: "ON", checado: false, abrir: false},
                              {objeto: "Clearence", acao: "Obtain", checado: false, abrir: false},
                              {objeto: "Radio", acao: "OFF", checado: false, abrir: false},
                              {objeto: "Avionics", acao: "OFF", checado: false, abrir: false},
                              {objeto: "Fuel Selectors", acao: "Both ON", checado: false, abrir: false},
                              {objeto: "Cowl Flap", acao: "Open", checado: false, abrir: false},
                              {objeto: "Alternative Air", acao: "Closed", checado: false, abrir: false},
                              {objeto: "Mixture", acao: "Full Forward", checado: false, abrir: false},
                              {objeto: "Propellers Control", acao: "Full Forward", checado: false, abrir: false},
                              {objeto: "Throttle", acao: "Open ½ inch", checado: false, abrir: false},
                              {objeto: "Beacon", acao: "ON", checado: false, abrir: false}]

  //Checks-lists objeto: objeto a ser checado, acao: Ação necessária ao objeto a ser checado, 
  //checado: inicador que determina se objeto foi checado, abrir: Condição para exibir ação no card
  //oleo: condição para exibição da mensagem do oleo no card
  private motorEsquerdo = [{objeto: "Magnetos", acao: "ON", checado: false, abrir: false, oleo: false},
                           {objeto: "Fuel Pump", acao: "ON for 3 Seconds then OFF", checado: false, abrir: false, oleo: false},
                           {objeto: "Mixture", acao: "Cutoff", checado: false, abrir: false, oleo: false},
                           {objeto: "Propeller Area", acao: "Clear", checado: false, abrir: false, oleo: false},
                           {objeto: "Starter", acao: "Engage", checado: false, abrir: false, oleo: false},
                           {objeto: "Mixture", acao: "Advanced as Engine Starts", checado: false, abrir: false, oleo: false},
                           {objeto: "Oil Pressure", acao: "Check", checado: false, abrir: false, oleo: true},
                           {objeto: "Throttle", acao: "1000 RPM", checado: false, abrir: false, oleo: false},
                           {objeto: "Alternator", acao: "ON", checado: false, abrir: false, oleo: false}]
                           
  //Checks-lists objeto: objeto a ser checado, acao: Ação necessária ao objeto a ser checado, 
  //checado: inicador que determina se objeto foi checado, abrir: Condição para exibir ação no card
  //oleo: condição para exibição da mensagem do oleo no card
  private motorDireito = [{objeto: "Magnetos", acao: "ON", checado: false, abrir: false},
                          {objeto: "Fuel Pump", acao: "ON for 3 Seconds then OFF", checado: false, abrir: false, oleo: false},
                          {objeto: "Mixture", acao: "Cutoff", checado: false, abrir: false, oleo: false},
                          {objeto: "Propeller Area", acao: "Clear", checado: false, abrir: false, oleo: false},
                          {objeto: "Starter", acao: "Engage", checado: false, abrir: false, oleo: false},
                          {objeto: "Mixture", acao: "Advanced as Engine Starts", checado: false, abrir: false, oleo: false},
                          {objeto: "Oil Pressure", acao: "Check", checado: false, abrir: false, oleo: true},
                          {objeto: "Throttle", acao: "1000 RPM", checado: false, abrir: false, oleo: false},
                          {objeto: "Alternator", acao: "ON", checado: false, abrir: false, oleo: false}]
  
  //Checks-lists objeto: objeto a ser checado, acao: Ação necessária ao objeto a ser checado, 
  //checado: inicador que determina se objeto foi checado, abrir: Condição para exibir ação no card  
  private aposAcionamento = [{objeto: "Engine Instruments", acao: "Check", checado: false, abrir: false},
                             {objeto: "Mixture", acao: "Lean ½ Inch", checado: false, abrir: false},
                             {objeto: "Avionics", acao: "ON", checado: false, abrir: false},
                             {objeto: "Radios", acao: "ON", checado: false, abrir: false},
                             {objeto: "Left Fuel Selector", acao: "60s in X-feed then ON", checado: false, abrir: false},
                             {objeto: "Right Fuel Selector", acao: "60s in X-FEED then ON", checado: false, abrir: false},
                             {objeto: "Tranponder", acao: "STBY/2000", checado: false, abrir: false}]
  
  //Checks-lists objeto: objeto a ser checado, acao: Ação necessária ao objeto a ser checado, 
  //checado: inicador que determina se objeto foi checado, abrir: Condição para exibir ação no card
  private taxi = [{objeto: "Clearance", acao: "Obtain", checado: false, abrir: false},
                    {objeto: "Navegation Lights", acao: "As required", checado: false, abrir: false},
                    {objeto: "Auxiliar Lights", acao: "As required", checado: false, abrir: false},
                    {objeto: "Taxi and Departure Brief", acao: "Released", checado: false, abrir: false},
                    {objeto: "Taxi area", acao: "Clear", checado: false, abrir: false},
                    {objeto: "Breaks", acao: "Released", checado: false, abrir: false},
                    {objeto: "Trottles Control", acao: "Max 1200 RPM", checado: false, abrir: false},
                    {objeto: "Breaks", acao: "Check", checado: false, abrir: false},
                    {objeto: "Controle Nose well", acao: "Check", checado: false, abrir: false},
                    {objeto: "Turn Bank", acao: "Check", checado: false, abrir: false}]
  
  //Checks-lists objeto: objeto a ser checado, acao: Ação necessária ao objeto a ser checado, 
  //checado: inicador que determina se objeto foi checado, abrir: Condição para exibir ação no card
  private before = [{objeto: "Breaks", acao: "Applied", checado: false, abrir: false, msg: ""},
                    {objeto: "Take off / Emergenci Brief", acao: "Completed", checado: false, abrir: false, msg: ""},
                    {objeto: "Throttle Controls", acao: "1000 RPM", checado: false, abrir: false, msg: ""},
                    {objeto: "Left Alternator", acao: "OFF/Check Light/ON", checado: false, abrir: false, msg: ""},
                    {objeto: "Right Alternator", acao: "OFF/Check Light/ON", checado: false, abrir: false, msg: ""},
                    {objeto: "Flight Instruments", acao: "Check/ Sets", checado: false, abrir: false, msg: ""},
                    {objeto: "Radios / Nav Aids", acao: "Sets", checado: false, abrir: false, msg: ""},
                    {objeto: "Flight Controls", acao: "Check", checado: false, abrir: false, msg: ""},
                    {objeto: "Ruder Trim", acao: "Neutral", checado: false, abrir: false, msg: ""},
                    {objeto: "Elevator Trim", acao: "Set for take OFF", checado: false, abrir: false, msg: ""},
                    {objeto: "Flaps", acao: "Set for take OFF", checado: false, abrir: false, msg: ""},
                    {objeto: "Cowl Flaps", acao: "Open", checado: false, abrir: false, msg: ""},
                    {objeto: "Alternative air", acao: "Closed", checado: false, abrir: false, msg: ""},
                    {objeto: "Mixture", acao: "Rich", checado: false, abrir: false, msg: ""},
                    {objeto: "Propellers Controls", acao: "Full Forward", checado: false, abrir: false, msg: ""},
                    {objeto: "Throttle Controls", acao: "2000 RPM", checado: false, abrir: false, msg: ""},
                    {objeto: "Mixture", acao: "Check", checado: false, abrir: false, msg: ""},
                    {objeto: "Feater", acao: "Check", checado: false, abrir: false, msg: "The RPM should be drop 1000 RPM in 1 – 3 seconds"},
                    {objeto: "Magnetos", acao: "Check", checado: false, abrir: false, msg: "Normal drop 100 RPM. Maximum drop 175 RPM, Max diferencial drop 50 RPM"},
                    {objeto: "Throttles Controls", acao: "2300 RPM", checado: false, abrir: false, msg: ""},
                    {objeto: "Governator", acao: "Check", checado: false, abrir: false, msg: ""},
                    {objeto: "Throttles Controls", acao: "Idle", checado: false, abrir: false, msg: "Between 800 RPM/ 1000 RPM"},
                    {objeto: "Misture", acao: "Lean ½ Inch", checado: false, abrir: false, msg: ""},
                    {objeto: "Vacun Pumps", acao: "Check operative", checado: false, abrir: false, msg: ""}]

  //Checks-lists objeto: objeto a ser checado, acao: Ação necessária ao objeto a ser checado, 
  //checado: inicador que determina se objeto foi checado, abrir: Condição para exibir ação no card
  private ClrTkOff = [{objeto: "Seat Belts / Doors", acao: "Fasten / Closed", checado: false, abrir: false, msg: ""},
  {objeto: "Passenger", acao: "Advised / Speech", checado: false, abrir: false, msg: ""},
  {objeto: "Fuel Sector Valve", acao: "Open", checado: false, abrir: false, msg: ""},
  {objeto: "Mixture", acao: "Rich", checado: false, abrir: false, msg: ""},
  {objeto: "Propeller Control", acao: "Full Forward", checado: false, abrir: false, msg: ""},
  {objeto: "Engine Instruments", acao: "Check", checado: false, abrir: false, msg: ""},
  {objeto: "Fuel Pumps", acao: "ON", checado: false, abrir: false, msg: ""},
  {objeto: "Magnetos", acao: "ON", checado: false, abrir: false, msg: ""},
  {objeto: "Landing Light", acao: "ON", checado: false, abrir: false, msg: ""}]
  
  //Checks-lists objeto: objeto a ser checado, acao: Ação necessária ao objeto a ser checado, 
  //checado: inicador que determina se objeto foi checado, abrir: Condição para exibir ação no card
  private ckl500 = [{objeto: "Gear", acao: "Up No lights", checado: false, abrir: false},
                    {objeto: "Flaps", acao: "UP", checado: false, abrir: false},
                    {objeto: "Throttle", acao: "25 Pol", checado: false, abrir: false},
                    {objeto: "Propeller Control", acao: "2500 RPM", checado: false, abrir: false},
                    {objeto: "Mixture", acao: "Set", checado: false, abrir: false},
                    {objeto: "Engine Instruments", acao: "Check", checado: false, abrir: false},
                    {objeto: "Landing Light", acao: "OFF", checado: false, abrir: false},
                    {objeto: "Auxiliar Lights", acao: "OFF", checado: false, abrir: false}]
  
  //Checks-lists objeto: objeto a ser checado, acao: Ação necessária ao objeto a ser checado, 
  //checado: inicador que determina se objeto foi checado, abrir: Condição para exibir ação no card
  private cruise = [{objeto: "Throttle", acao: "Set", checado: false, abrir: false, msg: "Between 19 Pol / 22 Pol"},
  {objeto: "Propeller Control", acao: "Set", checado: false, abrir: false, msg: "2400 RPM"},
  {objeto: "Fuel Pump", acao: "OFF", checado: false, abrir: false, msg: ""},
  {objeto: "Mixture", acao: "Check", checado: false, abrir: false, msg: ""},
  {objeto: "Engine Instruments", acao: "Check", checado: false, abrir: false, msg: ""},
  {objeto: "Pitot Heat", acao: "As required", checado: false, abrir: false, msg: ""},
  {objeto: "Cowl Flaps", acao: "As required", checado: false, abrir: false, msg: ""}]

  //Checks-lists objeto: objeto a ser checado, acao: Ação necessária ao objeto a ser checado, 
  //checado: inicador que determina se objeto foi checado, abrir: Condição para exibir ação no card
  private decAndApp = [{objeto: "Descend and Approach Briefing", acao: "Completed", checado: false, abrir: false, msg: ""},
  {objeto: "Altimeter/Radio/Avionics", acao: "Set", checado: false, abrir: false, msg: ""},
  {objeto: "Seats and Seatbelts", acao: "Adjusted and Fastened", checado: false, abrir: false, msg: ""},
  {objeto: "Cowl Flaps", acao: "As required", checado: false, abrir: false, msg: ""},
  {objeto: "Mixture", acao: "Set", checado: false, abrir: false, msg: ""},
  {objeto: "Throttle", acao: "Set", checado: false, abrir: false, msg: ""},
  {objeto: "Propeller Control", acao: "Set", checado: false, abrir: false, msg: ""}]

  //Checks-lists objeto: objeto a ser checado, acao: Ação necessária ao objeto a ser checado, 
  //checado: inicador que determina se objeto foi checado, abrir: Condição para exibir ação no card
  private app = [{objeto: "Fuel Selectors", acao: "Both ON", checado: false, abrir: false},
                 {objeto: "Mistura", acao: "Rich", checado: false, abrir: false},
                 {objeto: "Propeller Control", acao: "Full Forward", checado: false, abrir: false},
                 {objeto: "Gear", acao: "Down and Locked", checado: false, abrir: false},
                 {objeto: "Fuel Pumps", acao: "ON", checado: false, abrir: false},
                 {objeto: "Landing Lights", acao: "ON", checado: false, abrir: false},
                 {objeto: "Auxiliar Lights", acao: "ON", checado: false, abrir: false}]

  //Checks-lists objeto: objeto a ser checado, acao: Ação necessária ao objeto a ser checado, 
  //checado: inicador que determina se objeto foi checado, abrir: Condição para exibir ação no card
  private aftLnd = [{objeto: "Flaps", acao: "UP", checado: false, abrir: false},
  {objeto: "Mixture", acao: "Lean ½ inch", checado: false, abrir: false},
  {objeto: "Fuel Pump", acao: "OFF", checado: false, abrir: false},
  {objeto: "Transponder", acao: "STBY", checado: false, abrir: false},
  {objeto: "Exterior Lights", acao: "As required", checado: false, abrir: false},
  {objeto: "Pitot Heat", acao: "OFF", checado: false, abrir: false}]
  
  //Checks-lists objeto: objeto a ser checado, acao: Ação necessária ao objeto a ser checado, 
  //checado: inicador que determina se objeto foi checado, abrir: Condição para exibir ação no card
  private shutdown = [{objeto: "Break", acao: "Set", checado: false, abrir: false},
  {objeto: "Electrical Equipament", acao: "OFF", checado: false, abrir: false},
  {objeto: "Avionics", acao: "OFF", checado: false, abrir: false},
  {objeto: "Throttle", acao: "1000 RPM", checado: false, abrir: false},
  {objeto: "Mixture", acao: "Cutoff", checado: false, abrir: false}]
  

  //Check-list de emergência 

  //Checks-lists objeto: objeto a ser checado, acao: Ação necessária ao objeto a ser checado, 
  //checado: inicador que determina se objeto foi checado, abrir: Condição para exibir ação no card
  private engineFireStart = [{objeto: "Starter", acao: "ENGAGE", checado: false, abrir: false},
  {objeto: "Throttle Controls", acao: "Full Forward", checado: false, abrir: false},
  {objeto: "Mixture", acao: "Cutoff", checado: false, abrir: false},
  {objeto: "Fuel Selectors", acao: "OFF", checado: false, abrir: false},
  {objeto: "Starter", acao: "OFF", checado: false, abrir: false},
  {objeto: "Master", acao: "OFF", checado: false, abrir: false}]

  //Checks-lists objeto: objeto a ser checado, acao: Ação necessária ao objeto a ser checado, 
  //checado: inicador que determina se objeto foi checado, abrir: Condição para exibir ação no card
  private engineFireFlight = [{objeto: "Affect Engine", acao: "Identified Forward", checado: false, abrir: false},
  {objeto: "Throttle", acao: "Closed", checado: false, abrir: false},
  {objeto: "Propeller", acao: "Feather", checado: false, abrir: false},
  {objeto: "Mixture", acao: "Cutoff", checado: false, abrir: false},
  {objeto: "Fuel Selectors", acao: "OFF", checado: false, abrir: false},
  {objeto: "Heater", acao: "OFF", checado: false, abrir: false},
  {objeto: "Magnetos", acao: "OFF", checado: false, abrir: false},
  {objeto: "Fuel pump", acao: "OFF", checado: false, abrir: false},
  {objeto: "Cowl Flaps affected Engine", acao: "Closed", checado: false, abrir: false},
  {objeto: "Alternator affected Engine", acao: "OFF", checado: false, abrir: false},
  {objeto: "Electrical load", acao: "Reduce", checado: false, abrir: false}
]

  //Checks-lists objeto: objeto a ser checado, acao: Ação necessária ao objeto a ser checado, 
  //checado: inicador que determina se objeto foi checado, abrir: Condição para exibir ação no card
  private engineFailFlight = [  {objeto: "Affected Engine", acao: "Identified", checado: false, abrir: false},
  {objeto: "Fuel Selector", acao: "X-Feed", checado: false, abrir: false},
  {objeto: "Alternative Air", acao: "ON", checado: false, abrir: false},
  {objeto: "Mixture", acao: "As required", checado: false, abrir: false},
  {objeto: "Fuel Pumps", acao: "ON", checado: false, abrir: false},
  {objeto: "Magnetos", acao: "Left or Right only", checado: false, abrir: false}
]
  
  //Checks-lists objeto: objeto a ser checado, acao: Ação necessária ao objeto a ser checado, 
  //checado: inicador que determina se objeto foi checado, abrir: Condição para exibir ação no card
  private feathering = [ {objeto: "Affect Engine", acao: "Identified", checado: false, abrir: false},
  {objeto: "Minimum Speed", acao: "90 MPH", checado: false, abrir: false},
  {objeto: "Throttle", acao: "Idle", checado: false, abrir: false},
  {objeto: "Propeller", acao: "Feather", checado: false, abrir: false},
  {objeto: "Mixture", acao: "OFF", checado: false, abrir: false},
  {objeto: "Magnetos", acao: "OFF", checado: false, abrir: false},
  {objeto: "Fuel Pump", acao: "OFF", checado: false, abrir: false},
  {objeto: "Cowl Flaps Affected Engine", acao: "Closed", checado: false, abrir: false},
  {objeto: "Alternator Affected Engine", acao: "OFF", checado: false, abrir: false},
  {objeto: "Electrical Load", acao: "Reduce", checado: false, abrir: false}
]
  
  //Checks-lists objeto: objeto a ser checado, acao: Ação necessária ao objeto a ser checado, 
  //checado: inicador que determina se objeto foi checado, abrir: Condição para exibir ação no card
  private unfeathering = [  {objeto: "Fuel Selector Inoperative Engine", acao: "ON", checado: false, abrir: false},
  {objeto: "Fuel Pump", acao: "OFF", checado: false, abrir: false},
  {objeto: "Throttle", acao: "¼ inch", checado: false, abrir: false},
  {objeto: "Propeller Control", acao: "Cruise Position", checado: false, abrir: false},
  {objeto: "Mixture", acao: "Full Forward", checado: false, abrir: false},
  {objeto: "Magnetos", acao: "ON", checado: false, abrir: false},
  {objeto: "Starter", acao: "Engage till prop windmills", checado: false, abrir: false}
]
  
  //Checks-lists objeto: objeto a ser checado, acao: Ação necessária ao objeto a ser checado, 
  //checado: inicador que determina se objeto foi checado, abrir: Condição para exibir ação no card
  private overspeed = [{objeto: "Affected Engine", acao: "Identified", checado: false, abrir: false},
  {objeto: "Throttle", acao: "Closed", checado: false, abrir: false},
  {objeto: "Speed", acao: "105 MPH", checado: false, abrir: false},
  {objeto: "Propeller Control", acao: "Low RPM", checado: false, abrir: false},
  {objeto: "Throttle", acao: "Slowly Increased", checado: false, abrir: false},
  {objeto: "Normal RPM", acao: "Check", checado: false, abrir: false}
]
  
  //Checks-lists objeto: objeto a ser checado, acao: Ação necessária ao objeto a ser checado, 
  //checado: inicador que determina se objeto foi checado, abrir: Condição para exibir ação no card
  private landingGearUnsafe = [  {objeto: "Landing gear control", acao: "Down", checado: false, abrir: false},
  {objeto: "Navegation Lights", acao: "OFF", checado: false, abrir: false},
  {objeto: "Circuit brake", acao: "Check IN", checado: false, abrir: false},
  {objeto: "Master", acao: "ON", checado: false, abrir: false},
  {objeto: "Alternators", acao: "Check", checado: false, abrir: false},
  {objeto: "Landing gear lights", acao: "Check 3 Green Lights", checado: false, abrir: false}
]
  
  //Checks-lists objeto: objeto a ser checado, acao: Ação necessária ao objeto a ser checado, 
  //checado: inicador que determina se objeto foi checado, abrir: Condição para exibir ação no card
  private manualExtension = [{objeto: "Landing Gear Control", acao: "Down", checado: false, abrir: false},
  {objeto: "Circuit brake", acao: "OUT", checado: false, abrir: false},
  {objeto: "Speed", acao: "Below 100 MPH", checado: false, abrir: false},
  {objeto: "Emergency Gear Knob", acao: "Pull", checado: false, abrir: false},
  {objeto: "Landing Gear Lights", acao: "Check 3 Green Lights", checado: false, abrir: false}
]
  
  //Checks-lists objeto: objeto a ser checado, acao: Ação necessária ao objeto a ser checado, 
  //checado: inicador que determina se objeto foi checado, abrir: Condição para exibir ação no card
  private emergencyLanding = [  {objeto: "Approach Speed", acao: "100 MPH", checado: false, abrir: false},
  {objeto: "Flaps", acao: "UP", checado: false, abrir: false},
  {objeto: "Throttles", acao: "Close just before touchdown", checado: false, abrir: false},
  {objeto: "Master and magnetos", acao: "OFF before Touchdown", checado: false, abrir: false},
  {objeto: "Fuel Selector", acao: "OFF", checado: false, abrir: false},
  {objeto: "Contact Surface", acao: "Minimum Airspeed", checado: false, abrir: false}]
}

/* 

*/