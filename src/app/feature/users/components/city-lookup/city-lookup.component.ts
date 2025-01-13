import { Component, forwardRef } from '@angular/core';
import { ChipModule } from 'primeng/chip';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-city-lookup',
  standalone: true,
  imports: [ChipModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CityLookupComponent),
      multi: true
    }
  ],
  templateUrl: './city-lookup.component.html',
  styleUrls: ['./city-lookup.component.scss']
})
export class CityLookupComponent implements ControlValueAccessor {
  cities = [
    'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix',
    'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose',
    'Austin', 'Seattle', 'Denver', 'Boston', 'Nashville',
    'Portland', 'Miami', 'Atlanta', 'San Francisco', 'Detroit'
  ];

  value: string | null = null;
  disabled = false;

  private onChange: (value: string | null) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: string | null): void {
    this.value = value;
  }

  registerOnChange(fn: (value: string | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  selectCity(city: string): void {
    if (this.disabled) return;

    this.value = city;
    this.onChange(city);
    this.onTouched();
  }
}
