import { Component,Input } from '@angular/core';
import { book } from '../../dto/book.dto';
import { Router } from '@angular/router';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent {
  book:book=new book();
  
  constructor(private bookService:BookService,private router:Router){}
  
  onSubmit(){
    const newBook:book=this.book;
    /*if(this.bookService.addBook(newBook))
      this.router.navigate(['/']);*/
    this.bookService.insertBook(newBook).subscribe(
      (response)=>{
        console.log(response);
      }
    );
    this.router.navigate(['/']);
  }
}