import { Component } from "@angular/core";
import { ProductsService } from "src/app/_services/products.service";
import { TagService } from "src/app/_services/tag.service";

@Component({
	selector: "app-galery",
	templateUrl: "./galery.component.html",
	styleUrls: ["./galery.component.css"],
})
export class GaleryComponent {
	products: any[] = [];
	tags: any[] = [];

	constructor(
		private productsService: ProductsService,
		private tagsService: TagService,
	) {}

	ngOnInit() {
		this.productsService.getProducts().subscribe((response) => {
			this.products = response["hydra:member"];
			console.log(this.products);
		});

		this.tagsService.getTags().subscribe((response) => {
			this.tags = response["hydra:member"];
			console.log(this.tags);
		});
	}
}
