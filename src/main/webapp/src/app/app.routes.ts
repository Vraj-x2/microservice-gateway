import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddPoliceComponent } from './add-police/add-police.component';
import { ViewPoliceComponent } from './view-police/view-police.component';
import { AddPlushieComponent } from './add-plushie/add-plushie.component';
import { ViewPlushieComponent } from './view-plushie/view-plushie.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add-police', component: AddPoliceComponent },
  { path: 'view-police', component: ViewPoliceComponent },
  { path: 'add-plushie', component: AddPlushieComponent },
  { path: 'view-plushie', component: ViewPlushieComponent },
  { path: '**', redirectTo: '' }
];
