import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ResturantDetailsComponent } from './components/resturant-details/resturant-details.component';
import { ResturantsComponent } from './components/resturants/resturants.component';

const routes: Routes = [
  {path:'',redirectTo:"/home",pathMatch:'full'},
  {path:"home",component:HomeComponent},
  {path:'resturants/:id',component:ResturantsComponent},
  {path:'ResturantDetails/:res_id',component:ResturantDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
