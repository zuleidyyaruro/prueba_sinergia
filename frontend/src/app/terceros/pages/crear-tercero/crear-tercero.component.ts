import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-crear-tercero',
  templateUrl: './crear-tercero.component.html',
  styleUrls: ['./crear-tercero.component.css']
})
export class CrearTerceroComponent implements OnInit {

  public formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {

    this.formGroup = this.formBuilder.group({
      numero_identificacion: '',
      nombre1: '',
      nombre2: '',
      apellido1: '',
      appellido2: '',
      tipo_identificacion_id: '',
      tipo_tercero_id: '',
      departamento_id: '',
      ciudad_id: '',
      tipo_contribuyente: ''
    });

  }

}
