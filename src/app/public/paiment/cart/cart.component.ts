import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ProductsService } from "src/app/_services/products.service";

@Component({
	selector: "app-cart",
	templateUrl: "./cart.component.html",
	styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {
	productList!: any[];
	products: any[] = [];
	subTotal!: any;

	constructor(
		private product_service: ProductsService,
		private router: Router,
	) {}
	ngOnInit() {
		this.product_service.getProducts().subscribe({
			next: (res: any) => {
				console.log(res);
				this.productList = res;
			},
			error: (error) => {
				alert(error);
			},
			complete: () => {
				console.log("Request Completed");
			},
		});

		this.product_service.loadCart();
		this.products = this.product_service.getProduct();
	}

	//Change sub total amount
	changeSubTotal() {
		this.product_service.saveCart();
	}

	//Remove a Product from Cart
	removeFromCart(product: any) {
		this.product_service.removeProduct(product);
		this.products = this.product_service.getProduct();
	}

	//Calculate Total

	get total() {
		return this.products?.reduce(
			(sum, product) => ({
				quantityInCart: 1,
				price: sum.price + product.quantityInCart * product.price,
			}),
			{ quantityInCart: 1, price: 0 },
		).price;
	}

	checkout() {
		localStorage.setItem("cart_total", JSON.stringify(this.total));
		this.router.navigate(["/payment"]);
	}
}
