import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { MateriasPrimasComponent } from './materias-primas/materias-primas.component';
import { ListaMateriasPrimasComponent } from './materias-primas/components/lista-materias-primas/lista-materias-primas.component';
import { ListaInciNameComponent } from './materias-primas/components/lista-inci-name/lista-inci-name.component';
import { EliminarDialogComponent } from './materias-primas/components/eliminar-dialog/eliminar-dialog.component';
import { DialogMateriaPrimaComponent } from './materias-primas/components/dialog-materia-prima/dialog-materia-prima.component';
import { DialogInciNameComponent } from './materias-primas/components/dialog-inci-name/dialog-inci-name.component';
import { EditarMateriaPrimaComponent } from './materias-primas/components/editar-materia-prima/editar-materia-prima.component';
import { EditarInciNameComponent } from './materias-primas/components/editar-inci-name/editar-inci-name.component';

@NgModule({
  declarations: [
    AppComponent,
    MateriasPrimasComponent,
    ListaMateriasPrimasComponent,
    ListaInciNameComponent,
    DialogMateriaPrimaComponent,
    EliminarDialogComponent,
    DialogInciNameComponent,
    EditarMateriaPrimaComponent,
    EditarInciNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
