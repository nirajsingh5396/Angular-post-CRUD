import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostRoutingModule } from './post-routing.module';
import { MaterialModule } from '../material.module';
import { HttpClientModule } from '@angular/common/http';

import { PostsService } from '../shared/services/posts.service';


import { PostsComponent } from './posts.component';



@NgModule({
  declarations: [PostsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    PostRoutingModule
  ],
  providers: [PostsService],
})
export class PostsModule { }
