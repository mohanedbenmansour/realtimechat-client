import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-view-post-merchant',
  templateUrl: './view-post-merchant.component.html',
  styleUrls: ['./view-post-merchant.component.scss'],
})
export class ViewPostMerchantComponent implements OnInit {
  posts: any;

  constructor(
    private userService: UserService,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.readPosts(this.userService.getId());
  }
  DeletePost(id: string) {
    this.postService.deletePost(id).subscribe(
      (data) => {
        this.readPosts(this.userService.getId());
      },
      (err) => {
        console.log(err);
      }
    );
  }
  readPosts(id) {
    this.postService.getPostsByUser(id).subscribe(
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
