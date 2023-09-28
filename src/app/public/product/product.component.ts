import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
	selector: "app-product",
	templateUrl: "./product.component.html",
	styleUrls: ["./product.component.css"],
})
export class ProductComponent {
	constructor(private activated: ActivatedRoute, private http: HttpClient) {}

	url: string = "http://127.0.0.1:8000/api/products/";
	product: any;

	ngOnInit() {
		let pid = this.activated.snapshot.paramMap.get("pid");
		console.log(pid);
		this.http.get(this.url + pid).subscribe((data: any) => {
			// console.log(data);
			this.product = data;
		});
	}
}
