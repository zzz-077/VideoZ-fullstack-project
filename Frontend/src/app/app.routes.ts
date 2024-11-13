import { Routes } from '@angular/router';
import { UndefinedPageComponent } from './components/pages/undefined-page/undefined-page.component';
import { MainComponent } from './components/pages/main/main.component';
import { CallRoomComponent } from './components/pages/call-room/call-room.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'call/:id', component: CallRoomComponent },
  { path: '**', component: UndefinedPageComponent },
];
