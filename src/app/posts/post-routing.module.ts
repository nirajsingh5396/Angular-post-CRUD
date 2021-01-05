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
        path: 'create',
        component: CreatePostComponent
    },
    {
        path: 'edit/:id',
        component: CreatePostComponent
    },
    {
        path: ':id',
        component: PostDetailsComponent
    },
    {
        path: ':id/:comments',
        component: PostDetailsComponent
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PostRoutingModule { }
