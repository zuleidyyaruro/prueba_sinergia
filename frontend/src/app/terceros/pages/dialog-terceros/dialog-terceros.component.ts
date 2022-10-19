import { Component, OnInit, Inject } from '@angular/core';
import { TercerosService } from '../../services/terceros.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Tercero } from '../../interfaces/terceros.interface';

@Component({
  selector: 'app-dialog-terceros',
  templateUrl: './dialog-terceros.component.html',
  styleUrls: ['./dialog-terceros.component.css']
})
export class DialogTercerosComponent implements OnInit {

  public formGroup!: FormGroup;

  constructor(private servicio: TercerosService, private fb: FormBuilder, public dialogRef: MatDialogRef<DialogTercerosComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
    public snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.buildForm(this.data.obj);
  }

  buildForm(item: Tercero) {

    this.formGroup = this.fb.group({
      id: item.id,
      tipo_identificacion_id: [item.tipo_identificacion_id, Validators.required],
      numero_identificacion: [item.numero_identificacion, Validators.required],
      nombre1: [item.nombre1, Validators.required],
      nombre2: [item.nombre2, Validators.required],
      apellido1: [item.apellido1, Validators.required],
      appellido2: [item.appellido2, Validators.required],
      tipo_tercero_id: [item.tipo_tercero_id, Validators.required],
      departamento_id: [item.departamento_id, Validators.required],
      ciudad_id: [item.ciudad_id, Validators.required],
      tipo_contribuyente: [item.tipo_contribuyente, Validators.required],

    });

  }

  submit() {
    this.dialogRef.close(this.formGroup.value);
  }

}
