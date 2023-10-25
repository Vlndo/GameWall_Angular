import { Component } from "@angular/core";
import {NavigationEnd, Router} from "@angular/router";
import {TokenService} from "../../_services/token.service";

@Component({
	selector: "app-pheader",
	templateUrl: "./pheader.component.html",
	styleUrls: ["./pheader.component.css"],
})
export class PheaderComponent {
  isHomePage: boolean;

  constructor(private router: Router, private token:TokenService) {
    this.isHomePage = true;

    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isHomePage = (event.url === '/');
      }
    });

  }
  connected() {
    return this.token.isLogged();
  }
}
