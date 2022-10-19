import { Component, OnInit } from '@angular/core';
import { Tercero } from '../../interfaces/terceros.interface';
import { TercerosService } from '../../services/terceros.service';
import { datatable, column } from '../../interfaces/dataTable.interface';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogTercerosComponent } from '../dialog-terceros/dialog-terceros.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppConfirmService } from '../../services/app-confirm/app-confirm.service';


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
  public displayedColumns = ['departamento', 'municipio', 'tipo_identifacion', 'identificacion', 'nombres', 'tipo_tercero', 'BOTONES'];


  constructor(private servicio: TercerosService, public dialog: MatDialog, private snackBar: MatSnackBar, private confirmService: AppConfirmService) { }

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

    this.getTerceros();
  }

  getTerceros() {
    // this.isLoadingResults = true;
    this.servicio.viewGetTerceros().subscribe(result => {
      this.dataSource = new MatTableDataSource<Tercero>(result);
      this.isLoadingResults = false;
    }, error => console.error(error));

  }


  onPopUpTerceros(objterceros?: Tercero | null, isNew?: boolean): void {

    const title = isNew ? 'Alta' : 'Edición';
    const dialogRef: MatDialogRef<any> = this.dialog.open(DialogTercerosComponent, {
      data: { title: title, obj: objterceros || {} },
      disableClose: true,
      width: '520px',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(res => {


      if (!res) {
        // If user press cancel
        return;
      }

      if (isNew) {
        this.servicio.createTercero(res).subscribe(result => {
          if (result.cod_resultado === 0) {
            this.getTerceros();
            this.snackBar.open(`Se ha creado correctamente`, 'OK', {
              duration: 2000,
            });
          } else {
            this.snackBar.open(`Algo ha ido mal y no se ha creado`, 'Error', {
              duration: 2000,
            });
          }
        }, error => console.error(error));
      } else {
        this.servicio.updateTercero(res, res.id).subscribe(result => {
          if (result.cod_resultado === 0) {
            this.getTerceros();
            this.snackBar.open(`Se ha actualizado correctamente`, 'OK', {
              duration: 2000,
            });
          } else {
            this.snackBar.open(`Algo ha ido mal y no se ha actualizado`, 'Error', {
              duration: 2000,
            });
          }
        }, error => console.error(error));
      }
    });
  }

  onDelete(objterceros: Tercero): void {
    this.confirmService.confirm({ message: `¿Está seguro que desea eliminar este elemento?` }).subscribe(res => {
      if (res) {

        this.servicio.deleteTercero(objterceros.id).subscribe(result => {
          if (result.cod_resultado === 0) {
            this.getTerceros();
            this.snackBar.open(`Se ha eliminado correctamente el elemento`, 'OK', {
              duration: 2000,
            });
          } else {
            this.snackBar.open(`Algo ha ido mal y no se ha eliminado el elemento`, 'Error', {
              duration: 2000,
            });
          }
        }, error => console.error(error));
      }
    });
  }



}