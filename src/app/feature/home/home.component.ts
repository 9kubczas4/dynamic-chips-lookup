import { Component, inject } from '@angular/core';
import { RecentPagesService } from '../../core/services/recent-visited-pages';
import { FEATURES } from '../features';
import { RouterLink } from '@angular/router';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterLink, TitleCasePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private recentPagesService = inject(RecentPagesService);

  features = Object.values(FEATURES);
  recentPages = this.recentPagesService.getRecentPages();
}
