import { Component,Input,Output,EventEmitter,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { book } from 'src/app/dto/book.dto';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-corpse',
  templateUrl: './corpse.component.html',
  styleUrls: ['./corpse.component.scss']
})
export class CorpsePage implements OnInit{
  books:book[]=[];
  
  constructor(private bookService:BookService,private router:Router){
  }
  async ngOnInit(){
    await this.getAllBooks();
  }
  deleteBook(book:book){
    this.books=this.books.filter(x=>x.id!==book.id);
  }
  async getAllBooks(){
    await this.bookService.getAllBooks().subscribe((receivedBooks)=>{
      this.books=receivedBooks;
    });
  }
  

  goToAdd(){
    this.router.navigate(['/add']);
  }

  
  pruebaAdd(){
    this.bookService.setSharingBooks({id:4,title:'La filosofía del tocador',author:'Marqués de Sadé',avail:true});
  }
  
  subscribeToShared(){
    this.bookService.sharingBooks().subscribe((receivedBooks)=>{
      console.log('Subscribed');
      this.books=receivedBooks;
      for(let i=0;i<receivedBooks.length;i++){
        console.log(`{ ${receivedBooks[i].title} }`);
      }
    });
  }
}