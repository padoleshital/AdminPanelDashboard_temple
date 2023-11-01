import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { SimplebarAngularModule } from 'simplebar-angular';
import { MatDialogModule } from '@angular/material/dialog';

import { WidgetModule } from '../shared/widget/widget.module';
import { UIModule } from '../shared/ui/ui.module';

import { PagesRoutingModule } from './pages-routing.module';

import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddEditUserComponent } from './usermanagement/add-edit-user/add-edit-user.component';
import { StoreComponent } from './store/store.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { PlacedOrderComponent } from './placed-order/placed-order.component';
import { AvailableItemsComponent } from './available-items/available-items.component';


@NgModule({
  declarations: [
    UsermanagementComponent,
    ProfileComponent,
    DashboardComponent,
    AddEditUserComponent,
    StoreComponent,
    MyOrderComponent,
    PlacedOrderComponent,
    AvailableItemsComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    NgbModalModule,
    MatDialogModule,
    UIModule,
    WidgetModule,
    SimplebarAngularModule,
  ],
})
export class PagesModule { }