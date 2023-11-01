import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { StoreComponent } from './store/store.component';
import { AvailableItemsComponent } from './available-items/available-items.component';
import { PlacedOrderComponent } from './placed-order/placed-order.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'dashboard'
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'profile', component: ProfileComponent
  },
  {
    path: 'usermanagement', component: UsermanagementComponent
  },
  {
    path: 'store', component: StoreComponent
  },
  {
    path: 'Available-item', component: AvailableItemsComponent
  },
  {
    path: 'placed-oreder', component: PlacedOrderComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
