import { Component } from "@angular/core";
import { ProductsService } from "src/app/_services/products.service";
@Component({
	selector: "app-galery",
	templateUrl: "./galery.component.html",
	styleUrls: ["./galery.component.css"],
})
export class GaleryComponent {
	products: any[] = [];

	constructor(private productsService: ProductsService) {}

	ngOnInit() {
		this.productsService.getProducts().subscribe((response) => {
			this.products = response["hydra:member"];
			console.log(this.products);
		});
	}
}
