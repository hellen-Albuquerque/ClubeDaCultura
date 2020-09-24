import { Component, OnInit } from '@angular/core';
import { Categoria } from '../model/Categoria';
import { CategoriaService } from '../service/categoria.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-del-categoria',
  templateUrl: './del-categoria.component.html',
  styleUrls: ['./del-categoria.component.css']
})
export class DelCategoriaComponent implements OnInit {
  categoria: Categoria = new Categoria()


  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    let id: number = this.route.snapshot.params['id']
    this.findByIdCategoria(id)
  }
  findByIdCategoria(id: number){
    this.categoriaService.getByIdCategoria(id).subscribe((resp: Categoria)=>{
      this.categoria=resp
    })
  }

  btnSim(){
    this.categoriaService.deleteCategoria(this.categoria.id).subscribe(()=>{
      this.router.navigate(['/admin'])
      this.alert.showAlertSuccess('Categoria apagada com sucesso!')
    })

  }

  btnNao(){
    this.router.navigate(['/admin'])
  }


}
