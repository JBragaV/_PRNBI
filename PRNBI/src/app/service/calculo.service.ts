import { Injectable } from '@angular/core';
import { calculos } from '../models/calculo';
import { Storage } from "@ionic/storage";

//Nome do storage que vai registar os dados do calculo
const CALCULOS_KEY = "Historico"

@Injectable({
  providedIn: 'root'
})
export class CalculoService {

  constructor(private storage: Storage) { }

  //Metodo para adicionar item do storage
  add(calculo: calculos):Promise<any>{
    return this.storage.get(CALCULOS_KEY).then((clcls: calculos[])=>{
      if(clcls){
        clcls.push(calculo)
        return this.storage.set(CALCULOS_KEY, clcls)
      }else{
        return this.storage.set(CALCULOS_KEY, [calculo])
      }
    })
  }

  //Metodo para resgatar todos os item do storage
  getAll(){
    return this.storage.get(CALCULOS_KEY)
  }

  //Metodo para deletar item do storage
  delete(id: number): Promise<calculos>{
    return this.storage.get(CALCULOS_KEY).then((clcls: calculos[])=>{
      if(!clcls || clcls.length === 0){
        return null
      }
    let toKeep: calculos[] = []
    for(let c of clcls){
      console.log(c.id)
      console.log(id)
      console.log(c.id !== id)
      if(c.id !== id){
        toKeep.push(c)
      }
    }
    return this.storage.set(CALCULOS_KEY, toKeep)
    })
  }
}
