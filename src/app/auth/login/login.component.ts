import { Component } from "@angular/core";
import { ICredential } from "src/app/_interfaces/credential";
import { IToken } from "src/app/_interfaces/token";
import { AuthService } from "src/app/_services/auth.service";
import { TokenService } from "src/app/_services/token.service";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.css"],
})
export class LoginComponent {
	title = "Login";
	form: ICredential = { username: "", password: "" };

	constructor(private auth: AuthService, private token: TokenService) {}

	onSubmit(): void {
		this.auth.login(this.form).subscribe(
			(data) => {
				console.log(data.token);
				this.token.saveToken(data.token);
			},
			(err) => console.log(err),
		);
	}
}
