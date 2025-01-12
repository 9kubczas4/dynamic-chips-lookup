import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './core/layout/layout/layout.component';
import { NavLink } from './core/layout/interfaces/link';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  links: NavLink[] = [
    { path: 'users', label: 'Users' },
    { path: 'products', label: 'Products' }
  ];
}
