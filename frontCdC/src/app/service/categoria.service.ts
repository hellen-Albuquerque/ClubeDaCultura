import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Categoria } from '../model/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  token ={
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  }
  getAllCategoria(){
    return this.http.get('http://192.168.0.110:9000/categoria')
  }
  getByIdCategoria(id: number){
    return this.http.get(`http://192.168.0.110:9000/categoria/${id}`,this.token)

  }
  postCategoria(categoria: Categoria){
    return this.http.post('http://192.168.0.110:9000/categoria', categoria ,this.token)
  }
  putCategoria(categoria: Categoria) {
    return this.http.put('http://192.168.0.110:9000/categoria', categoria ,this.token)
 }
 deleteCategoria(id: number){
   return this.http.delete(`http://192.168.0.110:9000/categoria/${id}`, this.token)
 }
}
