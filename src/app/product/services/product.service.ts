import { Injectable } from '@angular/core';
import { Product, IProduct } from '../models/product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products:Array<Product> =  [
    {  id:1, name: 'Eastern Mango pickle 500g', code: 'mp500', category: { name: 'mango', code: '1', category: 1 }, unit: { name: 'PCS', code: '1', category: 0 }, purchaseRate: 100, salesRate: 110 },
    {  id:2, name: 'swad Mango pickle 500g', code: 'mp500', category: { name: 'mango', code: '1', category: 1 }, unit: { name: 'PCS', code: '1', category: 0 }, purchaseRate: 100, salesRate: 110 },
    {  id:3, name: 'Taste Buds Mango pickle 500g', code: 'mp500', category: { name: 'mango', code: '1', category: 1 }, unit: { name: 'PCS', code: '1', category: 0 }, purchaseRate: 100, salesRate: 110 },
    {  id:4, name: 'Eastern Garlic pickle 500g', code: 'mp500', category: { name: 'mango', code: '1', category: 1 }, unit: { name: 'PCS', code: '1', category: 0 }, purchaseRate: 100, salesRate: 110 },
    {  id:5, name: 'Eastern Lemon pickle 500g', code: 'mp500', category: { name: 'mango', code: '1', category: 1 }, unit: { name: 'PCS', code: '1', category: 0 }, purchaseRate: 100, salesRate: 110 },
    {  id:6, name: 'Eastern Tuna pickle 500g', code: 'mp500', category: { name: 'mango', code: '1', category: 1 }, unit: { name: 'PCS', code: '1', category: 0 }, purchaseRate: 100, salesRate: 110 },
    {  id:7, name: 'Eastern Serdine pickle 500g', code: 'mp500', category: { name: 'mango', code: '1', category: 1 }, unit: { name: 'PCS', code: '1', category: 0 }, purchaseRate: 100, salesRate: 110 },
    {  id:8, name: 'Eastern squids pickle 500g', code: 'mp500', category: { name: 'mango', code: '1', category: 1 }, unit: { name: 'PCS', code: '1', category: 0 }, purchaseRate: 100, salesRate: 110 },
    {  id:9, name: 'Eastern tomoto pickle 500g', code: 'mp500', category: { name: 'mango', code: '1', category: 1 }, unit: { name: 'PCS', code: '1', category: 0 }, purchaseRate: 100, salesRate: 110 },
    {  id:10, name: 'Melam Mango pickle 500g', code: 'mp500', category: { name: 'mango', code: '1', category: 1 }, unit: { name: 'PCS', code: '1', category: 0 }, purchaseRate: 100, salesRate: 110 },
    {  id:11, name: 'Kroger Mango pickle 500g', code: 'mp500', category: { name: 'mango', code: '1', category: 1 }, unit: { name: 'PCS', code: '1', category: 0 }, purchaseRate: 100, salesRate: 110 }
];

  constructor() { }

  getAllProducts(): Observable<IProduct[]>{
    return of(this.products);
  }
  
  getProductById(id:number):Observable<IProduct>{
    var pro=this.products.find(item=>item.id===id);
    return of(pro);
  }

  addNewProduct(prod:IProduct):void{
   this.products.sort(item => item.id)
   prod.id = this.products.length + 1
   this.products.push(prod);
  }

  deleteProduct(product:IProduct):IProduct[]{
   const index=this.products.findIndex(item => item.id===product.id);
   const deletedItem = this.products.splice(index,1);
    return deletedItem;
  }   

  updateProduct(product:IProduct):void{
    const index = this.products.findIndex(item => item.id === product.id);
    this.products[index] = product;
  }
}
