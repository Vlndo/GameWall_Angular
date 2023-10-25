import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { GaleryComponent } from "./galery/galery.component";
import { ContactComponent } from "./contact/contact.component";
import { PlayoutComponent } from "./playout/playout.component";
import { SignComponent } from "./sign/sign.component";
import { ProductComponent } from "./product/product.component";
import { CartComponent } from "./paiment/cart/cart.component";

const routes: Routes = [
	{
		path: "",
		component: PlayoutComponent,
		children: [
			{ path: "", component: HomeComponent },
			{ path: "galery", component: GaleryComponent },
			{ path: "contact", component: ContactComponent },
			{ path: "sign", component: SignComponent },
			{ path: "galery/product/:pid", component: ProductComponent },
			{
				path: "paiment",
				loadChildren: () =>
					import("./paiment/paiment.module").then(
						(m) => m.PaimentModule),
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PublicRoutingModule {}
