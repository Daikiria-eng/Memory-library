import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddBookPage } from './add-book/add-book.component';
import { CorpsePage } from './corpse/corpse.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/shared/shared.module';

const routes:Routes=[
  {
    path:'',
    component: CorpsePage,
    pathMatch: 'full'
  },
  {
    path:'add',
    component: AddBookPage
  }
];
@NgModule({
  declarations: [
    CorpsePage,
    AddBookPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]

})
export class BooksModule { }
