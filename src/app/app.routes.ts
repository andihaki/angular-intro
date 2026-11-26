import { Routes } from '@angular/router';

import { MyInputComponent } from './docs/bank.component';

export const routes: Routes = [
    {
        path: 'docs',
        // component: MyInputComponent
        // loadComponent: () => import('./docs/bank.component').then(mod => mod.MyInputComponent)
        // loadComponent: () => import('./docs/output.component').then(mod => mod.MyOutputComponent)
        loadComponent: () => import('./docs/provider.component').then(mod => mod.HelloProviderComponent)
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
