import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InciName, MateriaPrima } from '../interfaces/data';
import { DialogMateriaPrimaComponent } from './components/dialog-materia-prima/dialog-materia-prima.component';
import { DialogInciNameComponent } from './components/dialog-inci-name/dialog-inci-name.component';
import { EliminarDialogComponent } from './components/eliminar-dialog/eliminar-dialog.component';
import { EditarMateriaPrimaComponent } from './components/editar-materia-prima/editar-materia-prima.component';
import { EditarInciNameComponent } from './components/editar-inci-name/editar-inci-name.component';

@Component({
  selector: 'materias-primas',
  templateUrl: './materias-primas.component.html',
  styleUrls: ['./materias-primas.component.css']
})

export class MateriasPrimasComponent {

  
  idMateriaPrima!: number; // Variable a la que se le asignará el valor del Id que llega del HIJO - tabla materia prima
  idINCI!: number;

  constructor (private dialog: MatDialog)
  {

  }

  getIdMateriaPrima(id: number) { 
    this.idMateriaPrima = id; // Le paso el valor del ID que traigo del hijo - tabla materia prima
  }

  getIdINCI(id: number) {
    this.idINCI = id;
  }


  openDialogAgregar( categoria: string) {

    if ( categoria === 'Materia Prima') {
      this.dialog.open(DialogMateriaPrimaComponent, {
        width: '360px',
        height: 'auto',

      });
    }

    if ( categoria === 'INCI Name') {
      this.dialog.open(DialogInciNameComponent, {
        width: '360px',
        height: 'auto',

        data: {
          id: this.idMateriaPrima,
        }
      })
    }
  }

 

  openDialogDelete(dataToDelete: MateriaPrima | InciName, categoria: string) {
    if ( categoria === 'Materia Prima') {
      this.dialog.open(EliminarDialogComponent, {
        width: '360px',
        height: 'auto',

        data: {
          dataToDelete: dataToDelete
        }
      });
    }

    if ( categoria === 'INCI Name') {
      this.dialog.open(EliminarDialogComponent, {
        width: '360px',
        height: 'auto',

        data: {
          dataToDelete,
        }
      })
    }
  }


  openEditDialog(dataToEdit: MateriaPrima | InciName, categoria: string) {
    if ( categoria === 'Materia Prima') {
      this.dialog.open(EditarMateriaPrimaComponent, {
        width: '360px',
        height: 'auto',

        data: {
          dataToEdit,
          idMP: this.idMateriaPrima
        }
        
      });
    }

    if ( categoria === 'INCI Name') {
      this.dialog.open(EditarInciNameComponent, {
        width: '360px',
        height: 'auto',

        data: {
          dataToEdit,
          idMP: this.idMateriaPrima
        }
      })
    }
  }

}
