import {Produto} from './Produto';
export class Categoria {
    public id: number
    public tipo: string
    public quantidade: number
    public valor: number
    public produto: Produto[]
}