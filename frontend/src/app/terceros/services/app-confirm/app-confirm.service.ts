import { Observable } from 'rxjs';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Injectable } from '@angular/core';

import { AppComfirmComponent } from './app-confirm.component';

interface confirmData {
    title?: string,
    message?: string
    backName?: string;
    backIcon?: string;
    confirmName?: string;
    confirmIcon?: string;
    disableClose?: boolean;
}

@Injectable()
export class AppConfirmService {

    constructor(private dialog: MatDialog) { }

    public confirm(data: confirmData = {}): Observable<boolean> {
        data.title = data.title || 'Confirmar';
        data.message = data.message || '¿Estás seguro?';
        let dialogRef: MatDialogRef<AppComfirmComponent>;
        dialogRef = this.dialog.open(AppComfirmComponent, {
            width: '380px',
            disableClose: data.disableClose === false ? false : true,
            data: {
                title: data.title,
                message: data.message,
                backName: data.backName,
                confirmName: data.confirmName,
                backIcon: data.backIcon,
                confirmIcon: data.confirmIcon
            }
        });
        return dialogRef.afterClosed();
    }
}