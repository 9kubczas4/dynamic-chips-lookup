import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [ToolbarModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {}
