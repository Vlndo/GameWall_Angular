import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { GaleryComponent } from "./galery/galery.component";
import { ContactComponent } from "./contact/contact.component";
import { PublicRoutingModule } from "./public-routing.module";
import { PlayoutComponent } from "./playout/playout.component";
import { PheaderComponent } from "./pheader/pheader.component";
import { SignComponent } from "./sign/sign.component";
import { FormsModule } from "@angular/forms";

@NgModule({
	declarations: [
		HomeComponent,
		GaleryComponent,
		ContactComponent,
		PlayoutComponent,
		PheaderComponent,
		SignComponent,
	],
	imports: [CommonModule, PublicRoutingModule, FormsModule],
})
export class PublicModule {}
