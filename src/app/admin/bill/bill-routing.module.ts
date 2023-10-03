import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BIndexComponent } from "./b-index/b-index.component";
import {BDetailsComponent} from "./b-details/b-details.component";

const routes: Routes = [

	{ path: "", component: BIndexComponent },
	{ path: "details/:bid", component: BDetailsComponent },

];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class BillRoutingModule {}
