import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostRoutingModule } from './post-routing.module';
import { MaterialModule } from '../material.module';
import { HttpClientModule } from '@angular/common/http';

import { PostsService } from '../shared/services/posts.service';


import { PostsComponent } from './posts.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { NotificationService } from '../shared/services/notification.service';
import { ConfirmationAlertComponent } from '../shared/confirmation-alert/confirmation-alert.component';



@NgModule({
  declarations: [PostsComponent, PostDetailsComponent, CreatePostComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    PostRoutingModule,
    ConfirmationAlertComponent,
  ],
  providers: [PostsService , NotificationService],
})
export class PostsModule { }
