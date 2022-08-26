import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'church',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/church/church.module').then(
                (m) => m.ChurchPageModule
              ),
          },
        ],
      },
      {
        path: 'events',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/events/events.module').then(
                (m) => m.EventsPageModule
              ),
          },
        ],
      },
      {
        path: 'books',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/books/books.module').then(
                (m) => m.BooksPageModule
              ),
          },
        ],
      },
      {
        path: '',
        redirectTo: 'church',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
