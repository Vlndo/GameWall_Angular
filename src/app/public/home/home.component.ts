import { Component } from "@angular/core";
import { ProductsService } from "../../_services/products.service";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.css"],
})
export class HomeComponent {
	products: any[] = [];

	constructor(private productService: ProductsService) {}

	ngOnInit() {
		this.productService.getProducts().subscribe((response) => {
			this.products = response["hydra:member"].slice(0, 6);
		});
	}
}
