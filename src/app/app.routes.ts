import { Routes } from '@angular/router';

import { HomeRoutes } from './home/home.routes';
import { AboutRoutes } from './about/about.routes';
import { ItemRoutes } from './item/item.routes';

export const routes: Routes = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...ItemRoutes,
  { path: '**', redirectTo: '/home', pathMatch: 'full'}
];