import { Component, OnInit } from '@angular/core';
import { Tercero } from '../../interfaces/terceros.interface';
import { TercerosService } from '../../services/terceros.service';
import { datatable, column } from '../../interfaces/dataTable.interface';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-terceros-principal',
  templateUrl: './terceros-principal.component.html',
  styleUrls: ['./terceros-principal.component.css']
})
export class TercerosPrincipalComponent implements OnInit {

  public data: Tercero[] = [];
  public pagenumber!: number;
  public DataTable!: datatable;
  public isLoadingResults!: boolean;
  public total = 0;
  public dataSource!: MatTableDataSource<Tercero>;
  public displayedColumns = ['tipo_identificacion_id', 'numero_identificacion', 'nombre1', 'nombre2', 'apellido1', 'appellido2', 'tipo_tercero_id', 'departamento_id', 'ciudad_id', 'tipo_contribuyente', 'BOTONES'];


  constructor(private servicio: TercerosService) { }

  ngOnInit(): void {
    this.pagenumber = 0;
    this.DataTable = new datatable();
    this.DataTable.order = 'ASC';
    this.DataTable.sort = 'id';
    this.DataTable.columns[0] = new column(this.displayedColumns[0], '');
    this.DataTable.columns[1] = new column(this.displayedColumns[1], '');
    this.DataTable.columns[2] = new column(this.displayedColumns[2], '');
    this.DataTable.columns[3] = new column(this.displayedColumns[3], '');
    this.DataTable.columns[4] = new column(this.displayedColumns[4], '');
    this.DataTable.columns[5] = new column(this.displayedColumns[5], '');
    this.DataTable.columns[6] = new column(this.displayedColumns[6], '');
    this.DataTable.columns[7] = new column(this.displayedColumns[7], '');
    this.DataTable.columns[8] = new column(this.displayedColumns[8], '');
    this.DataTable.columns[9] = new column(this.displayedColumns[9], '');

    this.getTerceros();
  }

  getTerceros() {
    // this.isLoadingResults = true;
    this.servicio.getTerceros().subscribe(result => {
      this.dataSource = new MatTableDataSource<Tercero>(result);
      console.log(this.dataSource)
      this.isLoadingResults = false;
    }, error => console.error(error));

  }

}