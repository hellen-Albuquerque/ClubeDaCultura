import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { Categoria } from '../model/Categoria';
import { ProdutoService } from '../service/produto.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-put-produto',
  templateUrl: './put-produto.component.html',
  styleUrls: ['./put-produto.component.css']
})
export class PutProdutoComponent implements OnInit {
  
  produto: Produto = new Produto()
  idProd: number
  
  
  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    this.idProd = this.route.snapshot.params["id"]
    this.findByIdProduto(this.idProd)
    
  }
  findByIdProduto(id: number) {
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto) =>{
      this.produto = resp
    })
  }
  salvar(){
    this.produtoService.putProduto(this.produto).subscribe((resp: Produto) =>{
      this.produto = resp
      this.router.navigate(['/admin'])
      this.alert.showAlertSuccess('Produto alterado com sucesso!')
    }, err => {
      if(err.status == '500'){
        this.alert.showAlertInfo('Preencha todos os campos')
      }
    })
  }

}
