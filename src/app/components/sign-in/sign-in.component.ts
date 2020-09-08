import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  profileForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    public userService: UserService,
    private router: Router,
    private toastrService: ToastrService
  ) {}
  serverErrorMessages: boolean;
  submitted: boolean;
  ngOnInit(): void {}
  onSubmit(form: FormGroup) {
    this.submitted = true;
    this.userService.login(form.value).subscribe(
      (res) => {
        console.log(res['user']);
        this.userService.setToken(res['token']);
        this.userService.setRole(res['user'].role);
        this.userService.setEmail(res['user'].email);
        this.userService.setId(res['user']._id);
        this.showSuccess();
        this.goToDashboard();
      },
      (err) => {
        this.showUserError();
      }
    );
  }

  showSuccess() {
    this.toastrService.success('you have signed in successfully', 'success', {
      timeOut: 7000,
    });
  }
  showServerError() {
    this.toastrService.error(
      'something went wrong check your password',
      'server error',
      {
        timeOut: 3000,
      }
    );
  }
  showUserError() {
    this.toastrService.error('user does not exist', 'server error', {
      timeOut: 3000,
    });
  }
  goToDashboard() {
    let role = this.userService.getRole();
    if (role == 'ADMIN') this.router.navigateByUrl('/adminPage');
    if (role == 'CLIENT') this.router.navigateByUrl('/clientPage');
    if (role == 'MERCHANT') this.router.navigateByUrl('/merchantPage');
  }
}
