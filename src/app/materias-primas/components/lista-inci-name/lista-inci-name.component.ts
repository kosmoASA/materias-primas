import { Component, Input, ViewChild, OnChanges, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { InciName } from 'src/app/interfaces/data';
import { ComposicionInciService } from 'src/app/services/composicion-inci.service';

@Component({
  selector: 'lista-inci-name',
  templateUrl: './lista-inci-name.component.html',
  styleUrls: ['./lista-inci-name.component.css']
})
export class ListaInciNameComponent implements OnChanges{

  //* Variables

  @Input() public idMateriaPrima! : number; //REcibo el ID de MAterias Primas

  listaINCI: InciName[] = [];
  displayedColumns: string[] = ['ID', 'nombre', 'porcentaje', 'acciones'];

  dataSource!: MatTableDataSource<InciName>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @Output() InciToDelete: EventEmitter<InciName> = new EventEmitter();
  @Output() InciToEdit: EventEmitter<InciName> = new EventEmitter();

  constructor (private _INCIService: ComposicionInciService,
               private dialog: MatDialog)
  {
    
  }

  ngOnChanges() {
    this._INCIService.filterInciNameByMateriaPrima(this.idMateriaPrima);
    this._INCIService.getInciNameFiltered().subscribe((data: any) => {
      this.listaINCI = data;
      this.dataSource = new MatTableDataSource(this.listaINCI);
      this.dataSource.paginator = this.paginator;
    })
  }

  onEdit(dataToEdit: InciName) {
    this.InciToEdit.emit(dataToEdit);
  }

  onDelete(dataToDelete: InciName) {
    this.InciToDelete.emit(dataToDelete);
  }

 


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
