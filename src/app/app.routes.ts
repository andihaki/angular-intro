import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./home.component').then(mod => mod.HomeComponent)
    },
    {
        path: 'docs',
        // component: MyInputComponent
        // loadComponent: () => import('./docs/bank.component').then(mod => mod.MyInputComponent)
        // loadComponent: () => import('./docs/output.component').then(mod => mod.MyOutputComponent)
        // loadComponent: () => import('./docs/provider.component').then(mod => mod.HelloProviderComponent)
        loadComponent: () => import('./docs/profile/user-profile.component').then(mod => mod.UserProfileComponent)
    },
    {
      path: 'eyay',
      loadComponent: () => import ('./eyay/directive.component').then(mod => mod.MyDirectiveComponent)  
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
