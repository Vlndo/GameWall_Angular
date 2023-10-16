import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
	selector: "app-sign",
	templateUrl: "./sign.component.html",
	styleUrls: ["./sign.component.css"],
})
export class SignComponent implements OnInit {
	user: any = {
		email: "",
		name: "",
		plainPassword: "",
		age: "",
		isadmin: false,
		image: "image",
		country: "",
	};
	countries: any[] = [];
	url: string = "http://127.0.0.1:8000/api/users";
	urlGet: string = "http://127.0.0.1:8000/api/countries";

	constructor(private http: HttpClient, private router: Router) {}

	ngOnInit() {
		this.http.get(this.urlGet).subscribe((response: any) => {
			this.countries = response["hydra:member"];
			console.log(this.countries);
		});
	}

	onSubmit() {
		// console.log(this.user);
		this.http.post(this.url, this.user).subscribe((data) => {
			console.log("vos données ont été envoyées");
			// console.log(data);
		});
		return this.router.navigate(["auth"]);
	}
}
