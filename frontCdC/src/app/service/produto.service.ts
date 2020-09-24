import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }
  token={
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  }
  getAllProduto() {
    return this.http.get('http://192.168.0.110:9000/produto',this.token)
  }
  getByIdProduto(id: number){
    return this.http.get(`http://192.168.0.110:9000/produto/${id}`, this.token)
  }
  postProduto(produto: Produto){
    return this.http.post('http://192.168.0.110:9000/produto', produto ,this.token)
  }

  putProduto(produto: Produto) {
     return this.http.put('http://192.168.0.110:9000/produto', produto ,this.token)
  }
  deleteProduto(id: number){
    return this.http.delete(`http://192.168.0.110:9000/produto/${id}`, this.token)
  }
}

