import { Routes } from '@angular/router';
import { UndefinedPageComponent } from './components/pages/undefined-page/undefined-page.component';
import { MainComponent } from './components/pages/main/main.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: '**', component: UndefinedPageComponent },
];
