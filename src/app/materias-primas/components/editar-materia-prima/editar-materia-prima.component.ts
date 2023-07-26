import { Component, Inject, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MateriaPrima } from 'src/app/interfaces/data';
import { MateriasPrimasService } from 'src/app/services/materias-primas.service';

@Component({
  selector: 'app-dialog-materia-prima',
  templateUrl: './editar-materia-prima.component.html',
  styleUrls: ['./editar-materia-prima.component.css']
})

export class EditarMateriaPrimaComponent {
  
  //* Variables
  
  form: FormGroup;


  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<EditarMateriaPrimaComponent>,
              private _materiasPrimasService: MateriasPrimasService,
              @Inject(MAT_DIALOG_DATA) public data: any)
  {
    this.form = this.fb.group({
      nombre: [data.nombre, [Validators.required]],
      codigo: [data.codigo, [Validators.required, Validators.minLength(7)]]
    })


  }


  editarMateriaPrima() {

    if( this.form.invalid ) {
      return;
    }

  
    const editMateriaPrima: MateriaPrima = {
      idMP: this.data.idMP,
      nombre: this.form.value.nombre,
      codigo: this.form.value.codigo,
    }

    this._materiasPrimasService.editMateriaPrima(editMateriaPrima);
  
    this.dialogRef.close();
  
  }


  cancelarAgregar() {

  }
}
