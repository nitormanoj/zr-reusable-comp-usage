import { Component } from '@angular/core';
import { ZrChipComponent,ZrCheckboxComponent } from 'zr-components';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chip-showcase',
  imports: [FormsModule,ZrChipComponent,ZrCheckboxComponent],
  templateUrl: './chip-showcase.html',
  styleUrl: './chip-showcase.scss',
})
export class ChipShowcase {
  checkedChange(event :any){}
}
