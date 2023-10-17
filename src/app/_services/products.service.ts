import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class ProductsService {
	url = "http://127.0.0.1:8000/api/products";
	products: any[] = [];

	constructor(private http: HttpClient, private router: Router) {}

	getProducts(): Observable<any> {
		return this.http.get(this.url);
	}

	getProduct() {
		return this.products;
	}

	saveCart(): void {
		localStorage.setItem("cart_items", JSON.stringify(this.products));
	}

	addToCart(addedProduct: any) {
		this.products.push(addedProduct);
		this.saveCart();
	}

	loadCart(): void {
		this.products =
			JSON.parse(localStorage.getItem("cart_items") as any) || [];
	}

	productInCart(product: any): boolean {
		return this.products.findIndex((x: any) => x.id === product.id) > -1;
	}

	removeProduct(product: any) {
		const index = this.products.findIndex((x: any) => x.id === product.id);

		if (index > -1) {
			this.products.splice(index, 1);
			this.saveCart();
		}
	}

	clearProducts() {
		localStorage.clear();
		this.router.navigate(["galery"]);
	}
}
