import { Injectable, inject } from '@angular/core';
import { LOCAL_STORAGE } from '../providers/local-storage';

const RECENT_PAGES_KEY = 'recentPages';
const MAX_RECENT_PAGES = 3;

@Injectable({
  providedIn: 'root',
})
export class RecentPagesService {
  private storage = inject(LOCAL_STORAGE);

  addPage(path: string): void {
    const pages = this.getRecentPages();
    const filteredPages = pages.filter(p => p !== path);
    const newPages = [path, ...filteredPages].slice(0, MAX_RECENT_PAGES);
    this.storage.setItem(RECENT_PAGES_KEY, JSON.stringify(newPages));
  }

  getRecentPages(): string[] {
    const pages = this.storage.getItem(RECENT_PAGES_KEY);
    return pages ? JSON.parse(pages) : [];
  }
}
