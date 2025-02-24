import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { NavLink } from '../interfaces/link';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [RouterModule, ToolbarModule, ButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  links = input.required<NavLink[]>();
}
