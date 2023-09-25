import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { GaleryComponent } from "./galery/galery.component";
import { ContactComponent } from "./contact/contact.component";
import { PlayoutComponent } from "./playout/playout.component";
import { SignComponent } from "./sign/sign.component";

const routes: Routes = [
	{
		path: "",
		component: PlayoutComponent,
		children: [
			{ path: "", redirectTo: "home", pathMatch: "full" }, //patchMatch: full pour s'assurer que les noms de routes soient identiques, tout ça sert a rediriger vers ma page home
			{ path: "home", component: HomeComponent },
			{ path: "galery", component: GaleryComponent },
			{ path: "contact", component: ContactComponent },
			{ path: "sign", component: SignComponent },
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PublicRoutingModule {}
