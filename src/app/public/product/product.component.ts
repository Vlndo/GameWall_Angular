import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductsService } from "src/app/_services/products.service";

@Component({
	selector: "app-product",
	templateUrl: "./product.component.html",
	styleUrls: ["./product.component.css"],
})
export class ProductComponent implements OnInit {
	constructor(
		private activated: ActivatedRoute,
		private http: HttpClient,
		private router: Router,
		private product_service: ProductsService,
	) {}

	url: string = "http://127.0.0.1:8000/api/products/";
	product: any;
	products: any[] = [];
	subTotal!: any;

	ngOnInit() {
		let pid = this.activated.snapshot.paramMap.get("pid");
		// console.log(pid);
		this.http.get(this.url + pid).subscribe((data: any) => {
			this.product = data;
			console.log("id du produit affiché :", this.product.id);
			console.log("nom du produit affiché :", this.product.title);
			console.log("produit affiché :", this.product);
		});
	}

	addToCart(product: any) {
		if (!this.product_service.productInCart(product)) {
			product.quantityInCart = 1;
			this.product_service.addToCart(product);
			this.products = [...this.product_service.getProduct()];
			this.subTotal = product.price;
			this.router.navigate(["paiment/cart"]);
		}
	}

	// addItemToCart() {
	// 	this.cartService.addItemToCart(this.product);
	// 	// this.addQuantity();
	// 	this.router.navigate(["paiment/cart"]);
	// }

	// addQuantity() {
	// 	this.product.quantity++;
	// }
}
