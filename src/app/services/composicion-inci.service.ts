import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { InciName } from '../interfaces/data';

@Injectable({
  providedIn: 'root'
})
export class ComposicionInciService {

  private listaINCI = new BehaviorSubject<any>([]);
  private listaINCI$ = this.listaINCI.asObservable();

  private listaInciFiltered = new BehaviorSubject<any>([]);
  public listaInciFiltered$ = this.listaInciFiltered.asObservable();

  constructor() { }


  getlistaINCI(): Observable <InciName> {
    return this.listaINCI$;
  }


  addINCIName(InciName: InciName) {

    const dataINCIName = this.listaINCI.getValue();
    dataINCIName.push(InciName);

    this.listaINCI.next(dataINCIName);

  }
  

  editINCIName (INCIToEdit: InciName) {
    const dataINCIName = this.listaINCI.getValue();
    const indice = dataINCIName.findIndex((data: any) => data.idMP = INCIToEdit.idMP);

    if(indice !== -1) {
      dataINCIName[indice] = {...dataINCIName[indice], ...INCIToEdit};
      this.listaINCI.next(dataINCIName);
    }

  }

  deleteINCIName (idToDelete: number) {
    const dataINCIName = this.listaINCI.getValue();
    const newData = dataINCIName.filter((data: any) => data.idINCI !== idToDelete);

    this.listaINCI.next(newData);
  }


  filterInciNameByMateriaPrima(idINCI: number) {
    const dataINCIName = this.listaINCI.getValue();
    const dataInciFiltered = dataINCIName.filter((data:any) => data.idMP === idINCI);
    this.listaInciFiltered.next(dataInciFiltered);
  }

  getInciNameFiltered(): Observable<any> {
    return this.listaInciFiltered$;
  }




}
