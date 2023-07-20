import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './HomeComponent/home.component';
import { LoaderComponent } from './LoaderComponent/loader.component';
import { LogoutComponent } from './LogoutComponent/logout.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'loading', component: LoaderComponent },
  { path: 'logout', component: LogoutComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
