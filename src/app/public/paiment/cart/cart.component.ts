import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { ProductsService } from "src/app/_services/products.service";
import jwt_decode from "jwt-decode";

@Component({
	selector: "app-cart",
	templateUrl: "./cart.component.html",
	styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {
	productList!: any[];
	products: any[] = [];
	subTotal!: any;
	emailForm: FormGroup;
	isVisible = false;
	emailInToken: string | null = null;

	constructor(
		private product_service: ProductsService,
		private router: Router,
		private formBuilder: FormBuilder,
	) {
		this.emailForm = this.formBuilder.group({
			email: ["", [Validators.required, Validators.email]],
		});
	}
	ngOnInit() {
		let token = localStorage.getItem("token");
		if (token !== null) {
			let decoded: any = jwt_decode(token);
			console.log(decoded);
			this.emailInToken = decoded.email;
			console.log("Email récupéré :", this.emailInToken);
		}
		if (this.emailInToken) {
			localStorage.setItem("cart_email", this.emailInToken);
		}
		let cartEmail = localStorage.getItem("cart_email");
		if (!cartEmail) {
			this.isVisible = true;
		}
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

	clearProducts() {
		this.product_service.clearProducts();
	}

	setEmailForVerification(email: any) {
		if (this.emailForm.invalid) {
			alert("Entrez un mail valide");
			return;
		} else {
			localStorage.setItem("cart_email", email.value);
			console.log("email : ", email.value);
			this.isVisible = false;
		}
	}

	checkout() {
		let cartEmailSetted = localStorage.getItem("cart_email");
		if (cartEmailSetted) {
			localStorage.setItem("cart_total", JSON.stringify(this.total));
			this.router.navigate(["paiment/paiment-method"]);
		} else {
			alert("Veuillez entrer une adresse mail");
		}
	}
}
