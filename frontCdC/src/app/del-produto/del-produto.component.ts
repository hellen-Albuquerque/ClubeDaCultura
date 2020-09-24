import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-del-produto',
  templateUrl: './del-produto.component.html',
  styleUrls: ['./del-produto.component.css']
})
export class DelProdutoComponent implements OnInit {
  produto: Produto = new Produto()

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    let id: number = this.route.snapshot.params['id']
    this.findByIdProduto(id)
  }
  findByIdProduto(id: number){
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto)=>{
      this.produto=resp
    })
  }

  btnSim(){
    this.produtoService.deleteProduto(this.produto.id).subscribe(()=>{
      this.router.navigate(['/admin'])
      this.alert.showAlertSuccess('Produto apagado com sucesso')
    })

  }

  btnNao(){
    this.router.navigate(['/admin'])
  }

}
