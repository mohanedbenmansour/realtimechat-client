import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  Role:string;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.Role=this.userService.getRole();
  }
  logout() {
    this.userService.deleteToken();

    this.router.navigateByUrl('/home');
  }
}
