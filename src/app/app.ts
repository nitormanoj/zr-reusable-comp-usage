import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [FormsModule, RouterLink,
    RouterLinkActive,
    RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('zr-reusable-comp-usage');
 menuOpen = false;

  closeMenu() {
    this.menuOpen = false;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
