import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categoria } from '../model/Categoria';
import { CategoriaService } from '../service/categoria.service';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css']
})
export class DadosComponent implements OnInit {
  categoria: Categoria = new Categoria()


  constructor(
    private route: ActivatedRoute,
    private categoriaService: CategoriaService,
    private alert: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    let id = this.route.snapshot.params['id']
    this.findByIdCategoria(id)
  }
  findByIdCategoria(id: number){
    this.categoriaService.getByIdCategoria(id).subscribe((resp: Categoria) =>{
      this.categoria = resp;
    })
  }
  finalizar(){
    this.alert.showAlertSuccess('Compra finalizada com sucesso!')
  }

}
