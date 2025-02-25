import { AfterViewInit, Component, ElementRef, forwardRef, inject, signal } from '@angular/core';
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
export class CityLookupComponent  implements ControlValueAccessor, AfterViewInit {
  private readonly elementRef = inject(ElementRef);

  cities = [
    'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix',
    'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose',
    'Austin', 'Seattle', 'Denver', 'Boston', 'Nashville',
    'Portland', 'Miami', 'Atlanta', 'San Francisco', 'Detroit'
  ];

  value: string | null = null;
  disabled = false;
  isExpanded = signal(false);
  visibleCount = signal(this.cities.length);

  private observer: ResizeObserver | null = null;
  private onChange: (value: string | null) => void = () => {};
  private onTouched: () => void = () => {};

  ngAfterViewInit() {
    this.setupResizeObserver();
  }

  private setupResizeObserver() {
    const container = this.elementRef.nativeElement.querySelector('.chips-container');
    if (!container) return;

    this.observer = new ResizeObserver(() => {
      if (this.isExpanded()) return;

      // Get all chip elements
      const chips = container.querySelectorAll('.p-chip');
      if (!chips.length) return;

      const containerRect = container.getBoundingClientRect();
      const chipHeight = chips[0].getBoundingClientRect().height;
      const maxRows = 3;
      const maxY = containerRect.top + (chipHeight * maxRows);

      let visibleChips = 0;

      // Count chips that fit within two rows
      for (let i = 0; i < chips.length; i++) {
        const chip = chips[i];
        const chipRect = chip.getBoundingClientRect();

        if (chipRect.bottom <= maxY) {
          visibleChips++;
        } else {
          break;
        }
      }

      // Subtract 1 to make room for the "..." chip
      this.visibleCount.set(Math.max(0, visibleChips - 1));
    });

    this.observer.observe(container);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  visibleCities() {
    return this.isExpanded() ? this.cities : this.cities.slice(0, this.visibleCount());
  }

  hasMoreCities() {
    return this.cities.length > this.visibleCount();
  }

  expand() {
    this.isExpanded.set(true);
  }

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
