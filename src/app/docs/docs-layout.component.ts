import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-docs',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <nav>
      <a routerLink="/docs/input" routerLinkActive="active">Input</a>
      <a routerLink="/docs/output" routerLinkActive="active">Output</a>
      <a routerLink="/docs/provider" routerLinkActive="active">Provider</a>
      <a routerLink="/docs/basic" routerLinkActive="active">Basic</a>
    </nav>
    <router-outlet />
  `,
  styles: `
    nav {
      display: flex;
      gap: 1rem;
      margin-bottom: 1rem;
    }

    nav a.active {
      font-weight: bold;
      text-decoration: none;
    }
  `,
})
export class DocsLayoutComponent {}
