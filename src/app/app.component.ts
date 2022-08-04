import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { Observable } from 'rxjs';
import { Post } from './models/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'service-workers';
  public posts: Post[] = [];

  constructor(public http: HttpClient, private updates: SwUpdate) {
    this.getPosts().subscribe((res) => {
      this.posts = res;
    });
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('http://jsonplaceholder.typicode.com/posts');
  }
}
