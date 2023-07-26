import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MateriaPrima } from 'src/app/interfaces/data';

@Injectable({
  providedIn: 'root'
})
export class MateriasPrimasService {

  private listaMateriasPrimas = new BehaviorSubject<any>([]);
  private listaMateriasPrimas$ = this.listaMateriasPrimas.asObservable();


  constructor() { }


  getlistaMateriasPrimas(): Observable <MateriaPrima> {
    return this.listaMateriasPrimas$;
  }


  addMateriaPrima(materiaPrima: MateriaPrima) {

    const dataMateriasPrimas = this.listaMateriasPrimas.getValue();
    dataMateriasPrimas.push(materiaPrima);

    this.listaMateriasPrimas.next(dataMateriasPrimas);

  }
  

  editMateriaPrima (materiaPrimaToEdit: MateriaPrima) {
    const dataMateriasPrimas = this.listaMateriasPrimas.getValue();
    const indice = dataMateriasPrimas.findIndex((data: any) => data.idMP = materiaPrimaToEdit.idMP);

    if(indice !== -1) {
      dataMateriasPrimas[indice] = {...dataMateriasPrimas[indice], ...materiaPrimaToEdit};
      this.listaMateriasPrimas.next(dataMateriasPrimas);
    }

  }

  
}
