import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CorpseComponent } from './components/corpse/corpse.component';
import { AddBookComponent } from './components/add-book/add-book.component';

const routes: Routes = [
  {
    path: '',
    component: CorpseComponent
  },{
    path: 'add-book',
    component: AddBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }