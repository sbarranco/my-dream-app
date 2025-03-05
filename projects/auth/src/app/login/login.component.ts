import { inject, Component, OnInit, HostBinding } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service/auth.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
  ],
})
export class LoginComponent implements OnInit {
  @HostBinding('class') class = 'app-login';
  private router = inject(Router);
  private authService = inject(AuthService);

  form: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  error: string | null = null;
  user: string | null = null;

  ngOnInit() {
    this.user = this.authService.getUser();
  }

  submit() {
    if (this.form.valid) {
      this.authService.login(this.form.value.email);
      this.router.navigate(['/']);
    } else {
      this.error = 'Please enter a valid email address';
    }
  }
}
