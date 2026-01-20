import { Routes } from '@angular/router';
import { FeesTrackingComponent } from './fees-tracking/fees-tracking';

export const routes: Routes = [
    { path: '', redirectTo: 'fees-tracking', pathMatch: 'full' },
    { path: 'fees-tracking', component: FeesTrackingComponent }
];
