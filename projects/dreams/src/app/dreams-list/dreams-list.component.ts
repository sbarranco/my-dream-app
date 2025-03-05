import { CommonModule } from '@angular/common';
import { Component, HostBinding, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { DreamsService } from '../dreams-service/dreams.service';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dreams-list',
  templateUrl: './dreams-list.component.html',
  styleUrl: './dreams-list.component.scss',
  imports: [CommonModule, MatCardModule, MatButtonModule, RouterModule],
})
export class DreamsListComponent implements OnInit {
  title = 'dreams list';
  @HostBinding('class') class = 'app-dreams-list';

  private dreamsService = inject(DreamsService);

  dreams$ = this.dreamsService.dreams$;

  ngOnInit(): void {
    this.dreamsService.getDreams();
  }
}
