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
import { ProductComponent } from "./product/product.component";
import { NgOptimizedImage } from "@angular/common";

@NgModule({
	declarations: [
		HomeComponent,
		GaleryComponent,
		ContactComponent,
		PlayoutComponent,
		PheaderComponent,
		SignComponent,
		ProductComponent,
	],
	imports: [CommonModule, PublicRoutingModule, FormsModule, NgOptimizedImage],
	providers: [],
})
export class PublicModule {}
