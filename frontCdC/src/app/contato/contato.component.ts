import { Component, OnInit } from '@angular/core';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  logado: boolean = false

  constructor(
    private alert: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    let token = localStorage.getItem("token")
    if(token != null){
      this.logado = true
    }
  }
  enviar(){
    this.alert.showAlertSuccess('Enviado com sucesso!')
  }

}
