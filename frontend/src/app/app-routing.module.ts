import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: "login",
    loadChildren: () =>
    import("./auth/auth.module").then((m) => m.AuthModule)
  },
  {
    path: "practice-logs",
    loadChildren: () =>
      import("./practice-log/practice-log.module").then((m) => m.PracticeLogModule),
      canLoad: [AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
