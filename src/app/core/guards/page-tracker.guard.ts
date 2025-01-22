import { inject } from '@angular/core';
import { type CanActivateFn } from '@angular/router';
import { RecentPagesService } from '../services/recent-visited-pages';
import { HOME } from '../../feature/features';

export const pageTrackerGuard: CanActivateFn = (route) => {
  const recentPagesService = inject(RecentPagesService);
  const path = route.routeConfig?.path || '';

  if (path && path !== HOME) {
    recentPagesService.addPage(path);
  }

  return true;
};
