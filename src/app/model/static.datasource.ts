import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Observable, from } from "rxjs";

@Injectable()
export class StaticDataSource {
private products: Product[] = [
new Product(1, "Geladeira", "Category 1", "Product 1 (Category 1)", 100),
new Product(2, "Fogão", "Category 1", "Product 2 (Category 1)", 100),
new Product(3, "Secador de Cabelo", "Category 1", "Product 3 (Category 1)", 100),
new Product(4, "Computador", "Category 1", "Product 4 (Category 1)", 100),
new Product(5, "Notbook", "Category 1", "Product 5 (Category 1)", 100),
new Product(6, "Armário", "Category 2", "Product 6 (Category 2)", 100),
new Product(7, "Mesa", "Category 2", "Product 7 (Category 2)", 100),
new Product(8, "Cadeira", "Category 2", "Product 8 (Category 2)", 100),
new Product(9, "Poltrona", "Category 2", "Product 9 (Category 2)", 100),
new Product(10, "Centro", "Category 2", "Product 10 (Category 2)", 100),
new Product(11, "Painel", "Category 3", "Product 11 (Category 3)", 100),
new Product(12, "Celular", "Category 3", "Product 12 (Category 3)", 100),
new Product(13, "Tablet", "Category 3", "Product 13 (Category 3)", 100),
new Product(14, "Quadro", "Category 3", "Product 14 (Category 3)", 100),
new Product(15, "Espelho", "Category 3", "Product 15 (Category 3)", 100),
];
getProducts(): Observable<Product[]> {
return from([this.products]);
}
}
