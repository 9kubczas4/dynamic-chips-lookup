import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NavLink } from '../interfaces/link';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  imports: [HeaderComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  links = input<NavLink[]>();
}
