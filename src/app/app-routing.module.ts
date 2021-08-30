import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BluePageComponent } from './blue-page/blue-page.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { RedPageComponent } from './red-page/red-page.component';

const routes: Routes = [
  { 
    path: '',
    redirectTo: 'buttons',
    pathMatch: 'full',
  },
  { 
    path: 'buttons', 
    component: ButtonsComponent,
  },
  { 
    path: 'red-page', 
    component: RedPageComponent 
  },
  { 
    path: 'blue-page', 
    component: BluePageComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
