import { Component, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-color-picker',
  standalone: true,
  imports: [CommonModule, DialogModule, ColorPickerModule, ButtonModule, FormsModule],
  templateUrl: './color-picker.component.html',
  styleUrl: './color-picker.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ColorPickerComponent),
      multi: true
    }
  ]
})
export class ColorPickerComponent implements ControlValueAccessor {
  selectedColor: string | null = null;
  isDialogVisible = false;
  tempColor: string | null = null;

  defaultColors: string[] = [
    '#FF0000', '#FF4500', '#FFA500', '#FFD700', '#FFFF00', '#9ACD32', '#008000', '#00FF00',
    '#00FA9A', '#00FFFF', '#00BFFF', '#0000FF', '#8A2BE2', '#4B0082', '#800080', '#FF00FF',
    '#FF69B4', '#FFB6C1', '#FFF0F5', '#F0FFF0', '#F0FFFF', '#F5F5F5', '#DCDCDC', '#D3D3D3',
    '#C0C0C0', '#A9A9A9', '#808080', '#696969', '#000000', '#800000', '#8B4513', '#A0522D',
    '#BC8F8F', '#DEB887', '#F4A460', '#DAA520', '#EEE8AA', '#BDB76B', '#F0E68C', '#808000',
    '#556B2F', '#006400', '#008B8B', '#2F4F4F', '#483D8B', '#191970', '#4B0082', '#8B008B',
    '#8B0000', '#CD853F', '#D2691E', '#8B4513', '#A52A2A', '#B8860B', '#006400', '#483D8B'
  ];

  private onChange: (value: string | null) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: string | null): void {
    this.selectedColor = value;
  }

  registerOnChange(fn: (value: string | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  openDialog(): void {
    this.tempColor = this.selectedColor;
    this.isDialogVisible = true;
  }

  onCancel(): void {
    this.isDialogVisible = false;
  }

  onSelect(): void {
    this.selectedColor = this.tempColor;
    this.onChange(this.selectedColor);
    this.onTouched();
    this.isDialogVisible = false;
  }

  selectDefaultColor(color: string): void {
    this.tempColor = color;
  }
}
