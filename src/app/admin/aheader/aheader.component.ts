import { Component } from "@angular/core";
import { TokenService } from "src/app/_services/token.service";

@Component({
	selector: "app-aheader",
	templateUrl: "./aheader.component.html",
	styleUrls: ["./aheader.component.css"],
})
export class AheaderComponent {
	constructor(private token: TokenService) {}

	logOut(): void {
		this.token.clearToken();
	}
}
