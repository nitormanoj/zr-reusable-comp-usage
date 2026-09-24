import { Component } from '@angular/core';
import { ZrCheckboxComponent } from 'zr-components';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chip-showcase',
  imports: [FormsModule,ZrCheckboxComponent],
  templateUrl: './chip-showcase.html',
  styleUrl: './chip-showcase.scss',
})
export class ChipShowcase {
  checkedChange(event :any){}
}
