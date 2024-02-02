import { AuthService } from './../../service/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userData: User = {
    _id: "",
    name: "",
    cpf: "",
    password: "",
    stamps: 0
  };
  cpf: string = '';
  password: string = '';
  isAuth: boolean = false;

  constructor(private userService: UserService, private router: Router, private authService: AuthService){}

  onSubmit() {
    this.userService.authUser(this.cpf, this.password).subscribe(result => {
      this.userData = result;
      this.authService.setAuthenticatedCPF(this.userData.cpf);
      this.authService.setAuthenticatedPassword(this.userData.password);
      this.redirect();
    });
  }

  redirect(){
    this.isAuth = true;
    this.router.navigate(['/dashboard']);
  }
}
