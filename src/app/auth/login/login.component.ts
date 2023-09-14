import { Component } from "@angular/core";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.css"],
})
export class LoginComponent {
	title = "Login";
	form: any = { username: null, password: null };

	onSubmit(): void {
		console.log(this.form);
	}
}
