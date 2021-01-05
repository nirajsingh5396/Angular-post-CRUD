import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatePostComponent } from './create-post/create-post.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostsComponent } from './posts.component';


const routes: Routes = [
    {
        path: '',
        component: PostsComponent,
    },
    {
        path: ':id',
        component: PostDetailsComponent
    },
    {
        path: 'create',
        component: CreatePostComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PostRoutingModule { }
