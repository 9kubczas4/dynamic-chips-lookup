import { NgTemplateOutlet } from '@angular/common';
import { Component, input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-feature-layout',
  imports: [NgTemplateOutlet],
  templateUrl: './feature-layout.component.html',
  styleUrl: './feature-layout.component.scss'
})
export class FeatureLayoutComponent {
  sidebar = input<TemplateRef<any>>();
}
