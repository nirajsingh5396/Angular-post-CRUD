import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { IPosts } from 'src/app/shared/models/posts.model';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { PostsService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  newPostForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private activedRoute: ActivatedRoute,
    private postService: PostsService,
    private notity: NotificationService
  ) {
    this.newPostForm = this.fb.group({
      id: ['', Validators.required],
      userId: ['', Validators.required],
      title: ['', Validators.required],
      body: ['']
    });
  }

  ngOnInit() {
    const id = this.activedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.postService.getPostByID(+id).subscribe(post => {
        if (post) {
          this.newPostForm.setValue({
            'id': post[0].id,
            'userId': post[0].userId,
            'title': post[0].title,
            'body': post[0].body
          });
        }
      }, (err) => {
        this.notity.showNotification('Something went wrong', 'top', 'error');
      })
    }

  }

  onCreateNewPost() {
    if (!this.newPostForm.valid) {
      return;
    }
    const post = this.newPostForm.value as IPosts;
    this.newPostForm.reset('');
    this.postService.createPost(post).subscribe(post => {
      if (post.id) {
        this.notity.showNotification('New Post has been Created successfully', 'top', 'green-snackbar');
      }
    }, (err) => {
      this.notity.showNotification('Something went wrong', 'top', 'error');
    })
  }

}
