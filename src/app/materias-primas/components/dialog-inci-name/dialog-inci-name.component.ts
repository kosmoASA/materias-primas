import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { InciName } from 'src/app/interfaces/data';
import { ComposicionInciService } from 'src/app/services/composicion-inci.service';

@Component({
  selector: 'app-dialog-inci-name',
  templateUrl: './dialog-inci-name.component.html',
  styleUrls: ['./dialog-inci-name.component.css']
})
export class DialogInciNameComponent {
  
  //* Variables
  
  form: FormGroup;


  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<DialogInciNameComponent>,
              private _InciService: ComposicionInciService,
              @Inject(MAT_DIALOG_DATA) public data: any)
  {

    this.form = this.fb.group({
      nombre: ['', [Validators.required]],
      porcentaje: ['', [Validators.required]]
    })

  }



  agregarInciName() {

    if( this.form.invalid ) {
      return;
    }

    // Genera un id Númerico único
    const UUID = require('uuid-int');
    const id = 0;
    const generator = UUID(id);
    const uuid = generator.uuid();


    const newInciName: InciName = {
      idINCI: uuid,
      idMP: this.data.id,
      nombre: this.form.value.nombre,
      porcentaje: this.form.value.porcentaje,
    }

    this._InciService.addINCIName(newInciName);
    this._InciService.filterInciNameByMateriaPrima(this.data.id);
    this.dialogRef.close();

  }

  cancelarAgregar() {
    this.dialogRef.close();
  }
}
