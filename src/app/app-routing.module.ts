import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppLayoutComponent} from './_layout';


const routes: Routes = [
  {
    path: '', component: AppLayoutComponent,
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'book'},
      {path: 'book', loadChildren: './pages/book/book.module#BookModule'},
      // {path: 'issue', loadChildren: './pages/issue/issue.module#IssueModule'},
      // {path: 'project', loadChildren: './pages/project/project.module#ProjectModule'}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
