import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
	selector: "app-sign",
	templateUrl: "./sign.component.html",
	styleUrls: ["./sign.component.css"],
})
export class SignComponent {
	user: any = {
		email: "",
		name: "",
		plainPassword: "",
		age: "",
		isadmin: false,
		image: "image",
	};
	url: string = "http://127.0.0.1:8000/api/users";

	constructor(private http: HttpClient, private router: Router) {}

	onSubmit() {
		this.http.post(this.url, this.user).subscribe((data) => {
			console.log("vos données ont été envoyées");
		});
		return this.router.navigate(["auth"]);
	}
}
