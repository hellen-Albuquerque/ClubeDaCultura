import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { UserLogin } from '../model/UserLogin';
import { User } from '../model/User';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UserLogin = new UserLogin
  user: User = new User

  constructor(
    private authService: AuthService,
    private router: Router,
    private alert: AlertasService
  ) { }

  ngOnInit(){
    let token = localStorage.getItem("token")
    if(token != null){
      this.alert.showAlertInfo("Você ja está logado.")
      this.router.navigate(['/planos'])
    }
  }
  entrar(){
    this.authService.logar(this.userLogin).subscribe((resp: UserLogin) =>{
      this.userLogin = resp
      localStorage.setItem('token', this.userLogin.token)
      localStorage.setItem('email', this.userLogin.email)
      this.router.navigate(['/planos'])
    })
  }


}
