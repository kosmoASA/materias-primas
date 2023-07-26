import { Component, OnChanges, OnInit, Output, SimpleChanges, ViewChild, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MateriaPrima } from 'src/app/interfaces/data';
import { MateriasPrimasService } from '../../../services/materias-primas.service';

@Component({
  selector: 'lista-materias-primas',
  templateUrl: './lista-materias-primas.component.html',
  styleUrls: ['./lista-materias-primas.component.css']
})
export class ListaMateriasPrimasComponent implements OnInit, OnChanges{

  //* Variables
  listaMateriasPrimas: MateriaPrima[] = [];
  displayedColumns: string[] = ['idMP', 'codigo', 'nombre', 'acciones'];
  dataSource!: MatTableDataSource<any>;

  
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  //Outputs
  @Output() dataToEdit: EventEmitter<MateriaPrima> = new EventEmitter();
  @Output() dataToDelete: EventEmitter<MateriaPrima> = new EventEmitter();
  @Output() idMateriaPrima: EventEmitter<number> = new EventEmitter();
  

  constructor (private _materiasPrimasServices: MateriasPrimasService)
  {
    this.dataSource = new MatTableDataSource<MateriaPrima[]>([]);
  }

  
  ngOnInit(): void {
    this._materiasPrimasServices.getlistaMateriasPrimas().subscribe((data: any) => {
      this.listaMateriasPrimas = data;
      this.dataSource.data = this.listaMateriasPrimas;
    })
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource.data = this.listaMateriasPrimas;
    this.dataSource.paginator = this.paginator;
  }


  
  onEdit(dataToEdit: MateriaPrima) {

    this.dataToEdit.emit(dataToEdit);

  }

  onDelete(dataToDelete: MateriaPrima) {

    this.dataToDelete.emit(dataToDelete);

  }

  getIdMateriaPrima(idMP: number) {

    this.idMateriaPrima.emit(idMP);

  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
