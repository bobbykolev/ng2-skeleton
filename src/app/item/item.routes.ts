import { Route } from '@angular/router';
import { ItemComponent } from './item.component';

export const ItemRoutes: Route[] = [
  {
    path: 'item/:id',
    component: ItemComponent
  }
];
