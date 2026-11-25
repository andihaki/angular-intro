import { Routes } from '@angular/router';

import { MyInputComponent } from './docs/bank.component';

export const routes: Routes = [
    {
        path: 'docs',
        // component: MyInputComponent
        loadComponent: () => import('./docs/bank.component').then(mod => mod.MyInputComponent)
    },
    {
      path: 'eyay',
      loadComponent: () => import ('./eyay/directive.component').then(mod => mod.MyDirectiveComponent)  
    },
    {
        path: '**',
        redirectTo: ''
    }
];
