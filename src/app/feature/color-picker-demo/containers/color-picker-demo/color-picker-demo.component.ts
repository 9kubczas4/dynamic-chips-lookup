import { Component } from '@angular/core';
import { ColorPickerComponent } from '../../../../shared/components/color-picker/color-picker.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-color-picker-demo',
  standalone: true,
  imports: [ColorPickerComponent, ReactiveFormsModule],
  templateUrl: './color-picker-demo.component.html',
  styleUrl: './color-picker-demo.component.scss'
})
export class ColorPickerDemoComponent {
  myForm = new FormGroup({
    color: new FormControl('')
  });
}
