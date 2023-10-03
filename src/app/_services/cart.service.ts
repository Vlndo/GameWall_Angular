import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class CartService {
	private cartKey = "cartItems";
	private cartItems: any[] = [];

	constructor() {
		const savedCartItems = localStorage.getItem(this.cartKey);
		if (savedCartItems) {
			this.cartItems = JSON.parse(savedCartItems);
		}
	}

	getCartItems(): any[] {
		return this.cartItems;
	}

	addItemToCart(item: any): void {
		this.cartItems.push(item);
		this.saveCartItems();
		// console.log(this.CartItems);
	}
	removeItemFromCart(item: any): void {
		const index = this.cartItems.indexOf(item);
		if (index !== -1) {
			this.cartItems.splice(index, 1);
			this.saveCartItems();
		}
	}

	clearCart(): void {
		this.cartItems = [];
		this.clearLocalStorageCart();
		this.saveCartItems();
	}

	clearLocalStorageCart() {
		if (this.cartItems.length === 0) {
			localStorage.removeItem("cartItems");
		}
	}

	private saveCartItems(): void {
		localStorage.setItem(this.cartKey, JSON.stringify(this.cartItems));
	}
}
