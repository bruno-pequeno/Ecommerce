import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import { ErrorDialogComponent } from 'src/app/shared/error-dialog/error-dialog.component';
import { AuthService } from './../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userData: User = {
    _id: "",
    name: "",
    cpf: "",
    password: "",
    stamps: 0
  };

  constructor(
    private userService: UserService,
    private authService: AuthService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit() {
    const authenticatedCPF = this.authService.getAuthenticatedCPF();
    const authenticatedPassword = this.authService.getAuthenticatedPassword();

    if (authenticatedCPF && authenticatedPassword) {
      this.getUserData();
    }
  }

  getUserData() {
    const authenticatedCPF = this.authService.getAuthenticatedCPF();
    const authenticatedPassword = this.authService.getAuthenticatedPassword();

    this.userService.authUser(authenticatedCPF, authenticatedPassword)
      .subscribe((user: User) => {
        this.userData = user;
      });
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  stamps50() {
    if (this.userData.stamps >= 50) {
      this.userService.stamp50(this.userData.cpf)
      this.userData.stamps = this.userData.stamps - 50;
    }
  }

  stamps75() {
    if (this.userData.stamps >= 75) {
      this.userService.stamp50(this.userData.cpf)
      this.userData.stamps = this.userData.stamps - 75;
    }
  }

  stamps100() {
    if (this.userData.stamps = 100) {
      this.userService.stamp50(this.userData.cpf)
      this.userData.stamps = this.userData.stamps - 100;
    }
  }
}
