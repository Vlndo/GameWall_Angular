import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ErrorComponent } from "./_utils/error/error.component";
import { AuthGuard } from "./_helpers/auth.guard";

const routes: Routes = [
	{
		path: "",
		loadChildren: () =>
			import("./public/public.module").then((m) => m.PublicModule), // loadChildren pour charger(importer) le public module puis on l'active avec le then
	},
	{
		path: "admin",
		loadChildren: () =>
			import("./admin/admin.module").then((m) => m.AdminModule), // le paramettre m est le m de module
		canActivate: [AuthGuard],
	},
	{
		path: "auth",
		loadChildren: () =>
			import("./auth/auth.module").then((m) => m.AuthModule),
	},
	{ path: "**", component: ErrorComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
