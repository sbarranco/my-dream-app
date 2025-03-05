import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DreamsService } from '../dreams-service/dreams.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dreams-form',
  templateUrl: './dreams-form.component.html',
  styleUrl: './dreams-form.component.scss',
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class DreamsformComponent {
  title = 'dreams form';

  private dreamsService = inject(DreamsService);

  form: FormGroup = new FormGroup({
    description: new FormControl('', [
      Validators.required,
      Validators.maxLength(1000),
    ]),
  });

  onSubmit(): void {
    if (this.form.valid) {
      this.dreamsService.addDream(this.form.value);
      this.form.reset();
    }
  }
}
