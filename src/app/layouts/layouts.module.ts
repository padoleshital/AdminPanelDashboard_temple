import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SimplebarAngularModule } from 'simplebar-angular';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { UIModule } from '../shared/ui/ui.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { VerticalComponent } from './vertical/vertical.component';

@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [LayoutComponent, SidebarComponent, TopbarComponent, FooterComponent, VerticalComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgbDropdownModule,
    UIModule,
    SimplebarAngularModule
  ]
})
export class LayoutsModule { }
