import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { SellerinfoComponent } from './sellerinfo/sellerinfo.component';

const routes: Routes = [
  {path: '',        component: HomeComponent},               
   {path: 'product/:id', component: ProductdetailsComponent  ,
   children: [                                                         
    {path: '.',           component: ProductdetailsComponent},    
    {path: 'seller/:id', component: SellerinfoComponent}             
  ]}    
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export const routing = RouterModule.forRoot(routes);