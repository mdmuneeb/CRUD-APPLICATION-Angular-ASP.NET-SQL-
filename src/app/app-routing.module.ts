import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPostsComponent } from './admin/admin-posts/admin-posts.component';
import { AdminBlockPostComponent } from './admin/admin-block-post/admin-block-post.component';

const routes: Routes = [
  {path: 'admin/posts', component:AdminPostsComponent},
  {path: 'admin/posts/:id', component: AdminBlockPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
