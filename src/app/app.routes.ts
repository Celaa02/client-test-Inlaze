import { Routes } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { UserFormComponent } from './components/user-form/user-form.component';

export const routes: Routes = [
  
    {
    path: '',
    component: PostListComponent
  },
  {
    path: 'inlaze/post/',
    component: PostListComponent
  },
  {
    path: 'inlaze/post/create',
    component: PostFormComponent
  },
  {
    path: 'inlaze/post/:id',
    component: PostFormComponent
  },
  {
    path: 'inlaze/auth/signup',
    component: UserFormComponent
  },
  {
    path: 'inlaze/auth/signin',
    component: UserFormComponent
  },
];
