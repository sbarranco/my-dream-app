import { CommonModule } from '@angular/common';
import { Component, HostBinding } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from '../app/menu/menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, CommonModule, MenuComponent],
})
export class AppComponent {
  title = 'shell';
  @HostBinding('class') class = 'shell';
}
