import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IPosts } from 'src/app/shared/models/posts.model';
import { PostsService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  post$: Observable<IPosts[]>;

  postWithComments$: Observable<IPosts[]>;
  comments: string;


  constructor(
    private activedRoute: ActivatedRoute,
    private postService: PostsService
  ) { }

  ngOnInit() {
    const id = +this.activedRoute.snapshot.paramMap.get('id');
    this.comments = this.activedRoute.snapshot.paramMap.get('comments');
    if (!this.comments) {
      this.post$ = this.postService.getPostByID(id);
    } else{
      this.post$ = this.postService.getPostByIDWithComments(id);
    }

  }

}
