import { Component, OnInit } from '@angular/core';
import { PostService } from '../../service/post.service';
import { UserService } from '../../service/user.service';
import { User } from 'src/app/shared/user';
import { NgForm } from '@angular/forms';
import { Post } from 'src/app/shared/post';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent implements OnInit {
  post: Post = {
    description: '',
    price: '',
    owner: {
      name: '',
      email: '',
      userId: '',
    },
  };
  user: any;
  constructor(
    public postService: PostService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userService.getUserProfile(this.userService.getId()).subscribe(
      (data) => {
        this.user = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  onSubmit(form: NgForm) {
    console.log(this.user);
    this.post.owner.name = this.user.name;
    this.post.owner.userId = this.userService.getId();
    this.post.owner.email = this.user.email;
    this.post.price = form.value.price;
    this.post.description = form.value.description;
    console.log(this.post);
    this.postService.createPost(this.post).subscribe(
      (data) => {
        this.router.navigateByUrl('/merchantPage/myposts');
        form.reset();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
