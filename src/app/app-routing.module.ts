import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'posts',
    loadChildren: () => import('../app/posts/posts.module').then((m) => m.PostsModule),
  },
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
