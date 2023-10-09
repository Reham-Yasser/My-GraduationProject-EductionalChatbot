import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestComponent } from './test/test.component';
import { ChatComponent } from './chat/chat.component';
import { TrackComponent } from './track/track.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';

const routes: Routes = [
  {path: '', redirectTo:'home' , pathMatch:'full'},
  {path:'home' , component:HomeComponent},
  {path:'test' , component:TestComponent},
  {path:'chat' , component:ChatComponent},
  {path:'login' , component:LoginComponent},
  {path:'signup' , component:SignupComponent},
  {path:'about' , component:AboutComponent},
  {path:'courses' , component:CoursesComponent},
  {path:'navbar' , component:NavbarComponent},
  {path:'track' , component:TrackComponent},
  {path:'myCourses' , component:MyCoursesComponent},
  {path:'dashboard' , component:DashboardComponent},
  {path:'**' , component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
