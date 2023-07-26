import { Component, Inject, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MateriaPrima } from 'src/app/interfaces/data';
import { MateriasPrimasService } from 'src/app/services/materias-primas.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dialog-materia-prima',
  templateUrl: './dialog-materia-prima.component.html',
  styleUrls: ['./dialog-materia-prima.component.css']
})

export class DialogMateriaPrimaComponent {
  
  //* Variables
  
  form: FormGroup;


  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<DialogMateriaPrimaComponent>,
              private _materiasPrimasService: MateriasPrimasService,
              @Inject(MAT_DIALOG_DATA) public data: any)
  {

    this.form = this.fb.group({
      nombre: ['', [Validators.required]],
      codigo: ['', [Validators.required, Validators.minLength(7)]]
    })

  }




  agregarMateriaPrima() {

    if( this.form.invalid ) {
      return;
    }

    // Genera un id Númerico único
    const UUID = require('uuid-int');
    const id = 0;
    const generator = UUID(id);
    const uuid = generator.uuid();


    const newMateriaPrima: MateriaPrima = {
      idMP: uuid,
      codigo: this.form.value.codigo,
      nombre: this.form.value.nombre
    }

    this._materiasPrimasService.addMateriaPrima(newMateriaPrima);
    this.dialogRef.close();   


  }


  cancelarAgregar() {
    this.dialogRef.close();
  }
}
