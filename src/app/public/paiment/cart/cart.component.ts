import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { CartService } from "src/app/_services/cart.service";

@Component({
	selector: "app-cart",
	templateUrl: "./cart.component.html",
	styleUrls: ["./cart.component.css"],
})
export class CartComponent {
	cartItems: any[] = [];
	constructor(private cartService: CartService, private router: Router) {}

	ngOnInit() {
		let cartItemsString = localStorage.getItem("cartItems");
		if (cartItemsString) {
			let cartItems = JSON.parse(cartItemsString);
			if (cartItems.length > 0) {
				console.log("contenu du panier : ", cartItems);
				this.cartItems = cartItems;
			} else {
				console.log(
					"Aucun contenu de panier trouvé dans le local storage.",
				);
			}
		}
	}

	clearCart() {
		this.cartService.clearCart();
		this.router.navigate(["/"]);
	}
	clearLocalStorageCart() {
		this.cartService.clearLocalStorageCart();
		this.router.navigate(["/galery"]);
	}
}
