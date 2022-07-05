import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { CommonNavModule } from 'src/app/components/common/common-nav.module';
import { MainComponent } from './main.component';
import { AboutUsComponent } from 'src/app/components/about-us/about-us.component';
import { ContactUsComponent } from 'src/app/components/contact-us/contact-us.component';
import { ServicesComponent } from 'src/app/components/services/services.component';


@NgModule({
  declarations: [MainComponent, AboutUsComponent, ContactUsComponent, ServicesComponent],
  imports: [
    CommonModule,
    CommonNavModule,
    MainRoutingModule
  ]
})
export class MainModule { }
