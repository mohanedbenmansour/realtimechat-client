import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { PostService } from '../../service/post.service';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/shared/user';
import { Post } from 'src/app/shared/post';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-post-client',
  templateUrl: './view-post-client.component.html',
  styleUrls: ['./view-post-client.component.scss'],
})
export class ViewPostClientComponent implements OnInit {
  posts: any;
  faComment = faComment;
  constructor(
    private userService: UserService,
    private postService: PostService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.readPosts();
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
  addFriend(id: string) {
    this.userService
      .addFriend(this.userService.getId(), id)
      .subscribe((data) => {
        console.log(data);
        this.router.navigateByUrl('/clientPage/messages');
        (err) => {
          console.log(err);
        };
      });
  }
}
