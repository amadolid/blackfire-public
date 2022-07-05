import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from 'src/app/components/about-us/about-us.component';
import { ContactUsComponent } from 'src/app/components/contact-us/contact-us.component';
import { ServicesComponent } from 'src/app/components/services/services.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
