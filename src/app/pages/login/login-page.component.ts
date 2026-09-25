import { Component, inject, signal } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  errorMessage = signal<string | null>(null);

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.errorMessage.set('Renseignez un e-mail valide et un mot de passe.');
      return;
    }

    this.errorMessage.set(null);

    this.authService
      .login({ email: this.form.value.email!, password: this.form.value.password! })
      .subscribe({
        next: () => this.router.navigate(['/festival']),
        error: (error: HttpErrorResponse) => {
          this.errorMessage.set(error.error?.message ?? 'Connexion impossible, réessayez.');
        },
      });
  }
}