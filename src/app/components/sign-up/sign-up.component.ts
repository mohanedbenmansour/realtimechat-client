import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  serverErrorMessages: boolean;
  submitted: boolean;
  profileForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    role: new FormControl('', [Validators.required]),
  });
  ngOnInit(): void {}
  constructor(
    public userService: UserService,
    private router: Router,
    private toastrService: ToastrService
  ) {}

  onSubmit(form: FormGroup) {
    this.submitted = true;
    this.userService.createUser(form.value).subscribe(
      (data) => {
        this.showSuccess();
        form.reset();
        this.router.navigateByUrl('home');
      },
      (err) => {
        if (err.error.statusCode == 500) this.showServerError();
        else this.showUserError();
      }
    );
  }
  get email() {
    return this.profileForm.get('email');
  }
  get name() {
    return this.profileForm.get('name');
  }
  get password() {
    return this.profileForm.get('password');
  }
  get role() {
    return this.profileForm.get('role');
  }
  showSuccess() {
    this.toastrService.success('you have signed up successfully', 'success', {
      timeOut: 2000,
    });
  }
  showServerError() {
    this.toastrService.error('something wenttt wrong', 'server error', {
      timeOut: 3000,
    });
  }
  showUserError() {
    this.toastrService.error('user already exists', 'server error', {
      timeOut: 3000,
    });
  }
}
