import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'app-about', component: AboutComponent},
  {path: 'app-contact', component: ContactComponent},
  {path: 'home', component: HomeComponent},
  {path: 'app-login', component: LoginComponent},
  {path: 'upload', loadChildren: () => import('./upload/upload/upload.module').then(m => m.UploadModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
