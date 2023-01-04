import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    BookCardComponent,
    LogInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    HeaderComponent,
    BookCardComponent,
    LogInComponent,
  ]
})
export class SharedModule { }
