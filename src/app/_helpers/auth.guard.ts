// import { CanActivateFn } from "@angular/router";

// export const AuthGuard: CanActivateFn = (route, state) => {
// 	constructor(private router: Router){}

// };

//------------------------ VERSION DETAILLEE --------------------------------

import { Observable } from "rxjs";
import {
	ActivatedRouteSnapshot,
	CanActivate,
	Router,
	RouterStateSnapshot,
	UrlTree,
} from "@angular/router";
import { Injectable } from "@angular/core";
import { TokenService } from "../_services/token.service";

@Injectable({
	providedIn: "root",
})
export class AuthGuard implements CanActivate {
	constructor(private router: Router, private token: TokenService) {}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot,
	):
		| Observable<boolean | UrlTree>
		| Promise<boolean | UrlTree>
		| boolean
		| UrlTree {
		if (this.token.isLogged()) return true;
		else return this.router.navigate(["auth"]);
	}
}
