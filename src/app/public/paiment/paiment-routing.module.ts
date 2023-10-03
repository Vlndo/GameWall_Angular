import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CartComponent } from "./cart/cart.component";

const routes: Routes = [
	{ path: "paiment", redirectTo: "paiment/cart" },
	{ path: "cart", component: CartComponent },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PaimentRoutingModule {}
