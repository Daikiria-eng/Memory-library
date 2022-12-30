import { Component,Input,Output,EventEmitter } from '@angular/core';
import { book } from '../../dto/book.dto';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-corpse',
  templateUrl: './corpse.component.html',
  styleUrls: ['./corpse.component.scss']
})
export class CorpseComponent {
  books:book[]=[];
  
  constructor(private bookService:BookService){
  }
  ngOnInit():void{
    this.getAllBooks();
  }
  deleteBook(book:book){
    this.books=this.books.filter(x=>x.id!==book.id);
  }
  getAllBooks(){
    /*this.bookService.getAllBooks().subscribe((receivedBooks)=>{
      this.books=receivedBooks;
    });*/
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