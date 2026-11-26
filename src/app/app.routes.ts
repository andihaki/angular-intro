import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./home.component').then(mod => mod.HomeComponent)
    },
    {
        path: 'docs',
        loadComponent: () => import('./docs/docs-layout.component').then(mod => mod.DocsLayoutComponent),
        children: [
            { path: '', redirectTo: 'basic', pathMatch: 'full' },
            {
                path: 'input',
                loadComponent: () => import('./docs/bank.component').then(mod => mod.MyInputComponent)
            },
            {
                path: 'output',
                loadComponent: () => import('./docs/output.component').then(mod => mod.MyOutputComponent)
            },
            {
                path: 'provider',
                loadComponent: () => import('./docs/provider.component').then(mod => mod.HelloProviderComponent)
            },
            {
                path: 'basic',
                loadComponent: () => import('./docs/profile/user-profile.component').then(mod => mod.UserProfileComponent)
            },
        ]
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
