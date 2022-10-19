import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';


@Component({
    selector: 'app-confirm',
    template: `<h1 matDialogTitle class="mb-05">{{ data.title }}</h1>
    <div class="text-center my-12">
        <img src="/assets/images/warning.png" height="120px" alt="Mensaje importante">
    </div>
    <div mat-dialog-content class="mb-1">{{ data.message }}</div>
    <div mat-dialog-actions class="botones mt-10">
    <button type="button" mat-button (click)="dialogRef.close(false)">Volver</button>
    <button type="button" mat-button color="primary" (click)="dialogRef.close(true)">Aceptar</button>
    </div>`
})
export class AppComfirmComponent {
    constructor(
        public dialogRef: MatDialogRef<AppComfirmComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) { }
}
