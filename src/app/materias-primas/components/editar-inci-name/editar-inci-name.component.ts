import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { InciName } from 'src/app/interfaces/data';
import { ComposicionInciService } from 'src/app/services/composicion-inci.service';

@Component({
  selector: 'app-editar-inci-name',
  templateUrl: './editar-inci-name.component.html',
  styleUrls: ['./editar-inci-name.component.css']
})
export class EditarInciNameComponent {

  //* Variables
  
  form: FormGroup;


  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<EditarInciNameComponent>,
              private _INCIService: ComposicionInciService,
              @Inject(MAT_DIALOG_DATA) public data: any)
  {
    this.form = this.fb.group({
      nombre: [data.dataToEdit.nombre, [Validators.required]],
      porcentaje: [data.dataToEdit.porcentaje, [Validators.required]]
    })

  }

  editarInciName() {

    if( this.form.invalid ) {
      return;
    }

    const editInciName: InciName = {
      idMP: this.data.dataToEdit.idMP,
      idINCI: this.data.dataToEdit.idINCI,
      nombre: this.form.value.nombre,
      porcentaje: this.form.value.porcentaje,
    }

    this._INCIService.editINCIName(editInciName);
    this._INCIService.filterInciNameByMateriaPrima(this.data.dataToEdit.idMP);
    this.dialogRef.close();

  }

  cancelarAgregar() {
    this.dialogRef.close();
  }
}
