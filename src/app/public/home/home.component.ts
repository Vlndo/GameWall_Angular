import { Component } from "@angular/core";
import { ImagesService } from "src/app/_services/images.service";
// import { ProductsService } from "src/app/_services/products.service";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.css"],
})
export class HomeComponent {
	images: any[] = [];

	constructor(private imagesService: ImagesService) {}

	// ngOnInit() {
	// 	this.imagesService.getImages().subscribe((response: Blob) => {
	// 		this.images = response["hydra:member"];
	// 		console.log(this.images);
	// 	});
}
// }
