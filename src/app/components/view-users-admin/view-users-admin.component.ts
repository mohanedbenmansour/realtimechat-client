import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-view-users-admin',
  templateUrl: './view-users-admin.component.html',
  styleUrls: ['./view-users-admin.component.scss'],
})
export class ViewUsersAdminComponent implements OnInit {
  users: any;
  adminId: string;
  constructor(
    private userService: UserService,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.adminId = this.userService.getId();
    this.readUsers();
  }
  DeleteUser(id: string) {
    this.userService.deleteUser(id).subscribe(
      (data) => {
        this.readUsers();
      },
      (err) => {
        console.log(err);
      }
    );
  }
  readUsers() {
    this.userService.getAllUsers().subscribe(
      (data) => {
        this.users = data;
        console.log(this.users);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
