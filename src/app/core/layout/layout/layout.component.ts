import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterOutlet } from '@angular/router';
import { HasOutletPipe } from '../../../shared/pipes/has-outlet';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  imports: [HeaderComponent, HasOutletPipe, RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {}
