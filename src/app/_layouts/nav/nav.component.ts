import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {LoginComponent} from "../../_modules/auth/pages/login/login.component";




@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
  }

  onClick() {
    const dialogRef = this.dialog.open(LoginComponent, {
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe(res => {});
  }
}
