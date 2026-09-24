
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'chip',
    pathMatch: 'full'
  },
  {
    path: 'chip',
    loadComponent: () =>
      import(
        './features/showcase/chip-showcase/chip-showcase'
      ).then(m => m.ChipShowcase)
  },
  {
    path: '**',
    redirectTo: 'chip'
  }
];