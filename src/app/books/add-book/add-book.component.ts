import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';
import { book } from 'src/app/dto/book.dto';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookPage {
  book:book=new book();
  
  constructor(private bookService:BookService,private router:Router){}
  
  onSubmit(){
    const newBook:book=this.book;
    newBook.avail=true;
    this.bookService.insertBook(newBook).subscribe(
      (response)=>{
        if(response){
          this.router.navigate(['/']);
        }
        console.log(response);
      }
    );
  }
}