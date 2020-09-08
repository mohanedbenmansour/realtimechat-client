import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../shared/post';
@Injectable({
  providedIn: 'root',
})
export class PostService {
  public posts: Post[];
  selectedPost: Post = {
    description: '',
    price: '',
    owner: {
      name: '',
      email: '',
      userId: '',
    },
  };
  constructor(private http: HttpClient) {}
  createPost(post: any) {
    return this.http.post('http://localhost:3000/post', post);
  }
  getPosts() {
    return this.http.get('http://localhost:3000/post/all');
  }

  getPostsByUser(id: string) {
    return this.http.get('http://localhost:3000/post/' + id);
  }
  deletePost(id: string) {
    return this.http.delete('http://localhost:3000/post/' + id);
  }
}
