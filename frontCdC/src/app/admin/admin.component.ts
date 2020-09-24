import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { Categoria } from '../model/Categoria';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  produto: Produto = new Produto()
  listaProduto: Produto[]

  categoria: Categoria = new Categoria()
  listaCategoria: Categoria[]
  idCategoria: number

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    this.findAllProduto()
    this.findAllCategoria()
    let email = localStorage.getItem('email')
    if(email != 'admin@gmail.com'){
      this.alert.showAlertInfo("Area não encontrada")
      this.router.navigate(['/planos'])
    }
  }
  findAllProduto(){
    this.produtoService.getAllProduto().subscribe((resp: Produto[]) =>{
      this.listaProduto = resp
    })
  }
  findAllCategoria(){
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) =>{
      this.listaCategoria = resp
    })
  }
  findByIdCategoria(){
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria) =>{
      this.categoria = resp;
    })
  }
  cadastrar(){
    if(this.produto.descricao == null || this.produto.nome == null || this.produto.tema == null){
      this.alert.showAlertInfo("Preencha todos os campos!")
    }else {
      this.produtoService.postProduto(this.produto).subscribe((resp: Produto)=>{
        this.produto = resp
        this.produto = new Produto
        this.alert.showAlertSuccess('Produto Cadastrado com sucesso!')
        this.findAllProduto()
        
      })
    }
    
  }
  cadastrarCategoria(){
    if(this.categoria.tipo == null || this.categoria.quantidade == null || this.categoria.valor == null){
      this.alert.showAlertInfo("Preencha todos os campos!")
    }else {
      this.categoriaService.postCategoria(this.categoria).subscribe((resp: Categoria)=>{
        this.categoria = resp
        this.categoria = new Categoria        
        this.alert.showAlertSuccess('Categoria cadastrada com sucesso!')        
        this.findAllCategoria()                
      })            
    }
}

}