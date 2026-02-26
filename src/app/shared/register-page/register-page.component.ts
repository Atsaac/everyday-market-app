import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

  registerForm;

  constructor(private fb: FormBuilder, private router: Router) {

    this.registerForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern(/^[A-Za-z ]+$/)
      ]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      dob: ['', Validators.required],
      street: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9 ]+$/)]],
      province: ['', Validators.required],
      country: ['', Validators.required],
      terms: [false, Validators.requiredTrue]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.router.navigate(['/products']);
    }
  }

}


