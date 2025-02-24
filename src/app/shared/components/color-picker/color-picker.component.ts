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
}
