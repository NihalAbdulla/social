import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: 'app-dialog-booking',
  templateUrl: './dialog-booking.component.html',
  styleUrls: ['./dialog-booking.component.scss']
})
export class DialogBookingComponent {

  name: string;
  constructor(public dialog: MatDialog) {
    this.name="Name of the Company";
   }

  openBookingDialog(): void {
    let dialogRef = this.dialog.open(DialogBookingDetails, {
      height: '400px',
      width: '600px',
      data: { name: this.name }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed after conforming');
    });
  }
}

@Component({
  selector: 'dialog-booking-details',
  templateUrl: 'dialog-booking-details.html',
  styleUrls: ['./dialog-booking.component.scss']
})
export class DialogBookingDetails {

  constructor(
    public dialogRef: MatDialogRef<DialogBookingDetails>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
