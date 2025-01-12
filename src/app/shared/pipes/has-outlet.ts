import { Pipe, PipeTransform, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Pipe({
  name: 'hasOutlet'
})
export class HasOutletPipe implements PipeTransform {
  private readonly route = inject(ActivatedRoute);

  transform(outletName: string): boolean {
    return this.hasOutletInTree(this.route.root, outletName);
  }

  private hasOutletInTree(route: ActivatedRoute, outletName: string): boolean {
    // Check current route
    if (route.outlet === outletName && route.routeConfig) {
      return true;
    }

    // Check children
    if (route.children) {
      return route.children.some(child => this.hasOutletInTree(child, outletName));
    }

    // Check first child (primary outlet)
    if (route.firstChild) {
      return this.hasOutletInTree(route.firstChild, outletName);
    }

    return false;
  }
}
