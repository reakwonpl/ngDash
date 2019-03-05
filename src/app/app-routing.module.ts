import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionSalesComponent } from './sections/section-sales/section-sales.component';
import { SectionOrderComponent } from './sections/section-order/section-order.component';
import { SectionHealthComponent } from './sections/section-health/section-health.component';

const routes: Routes = [
  {    path: 'sales', component: SectionSalesComponent },
  {    path: 'order', component: SectionOrderComponent },
  {    path: 'health',component:SectionHealthComponent },
    
  {    path: '', redirectTo: '/health', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
