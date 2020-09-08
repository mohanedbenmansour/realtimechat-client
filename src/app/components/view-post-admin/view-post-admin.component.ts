import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { PostService } from 'src/app/service/post.service';
@Component({
  selector: 'app-view-post-admin',
  templateUrl: './view-post-admin.component.html',
  styleUrls: ['./view-post-admin.component.scss'],
})
export class ViewPostAdminComponent implements OnInit {
  posts: any;

  constructor(
    private userService: UserService,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.readPosts();
  }
  DeletePost(id: string) {
    this.postService.deletePost(id).subscribe(
      (data) => {
        this.readPosts();
      },
      (err) => {
        console.log(err);
      }
    );
  }
  readPosts() {
    this.postService.getPosts().subscribe(
      (data) => {
        this.posts = data;
        console.log(this.posts);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
