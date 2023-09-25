import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UEditComponent } from "./u-edit/u-edit.component";
import { UDeleteComponent } from "./u-delete/u-delete.component";
import { UIndexComponent } from "./u-index/u-index.component";

const routes: Routes = [
	{ path: "", component: UIndexComponent },
	{ path: "edit/:uid", component: UEditComponent },
	{ path: "delete/:uid", component: UDeleteComponent },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class UserRoutingModule {}
