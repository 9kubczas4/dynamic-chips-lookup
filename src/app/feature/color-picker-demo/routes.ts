import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./containers/color-picker-demo/color-picker-demo.component').then(c => c.ColorPickerDemoComponent)
  },
];
