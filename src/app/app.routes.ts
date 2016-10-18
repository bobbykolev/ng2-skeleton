import { Routes } from '@angular/router';

import { HomeRoutes } from './home/home.routes';
import { AboutRoutes } from './about/about.routes';

export const routes: Routes = [
  ...HomeRoutes,
  ...AboutRoutes,
  { path: '**', redirectTo: '/', pathMatch: 'full'}
];