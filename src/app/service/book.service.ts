import { Injectable } from '@angular/core';
import { book } from '../dto/book.dto';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  url="http://127.0.0.1:3000/books";
  books:book[]=[];
  private books$:BehaviorSubject<book[]>;

  constructor(private http:HttpClient){
    this.books=[
      {
        id:1,
        title:'La divina comedia',
        author:'Dante Alighieri',
        avail:true
      },{
        id:2,
        title:'La republica',
        author:'Platón',
        avail:false
      },{
        id:3,
        title:'Ensayos sobre la ceguera',
        author:'José Saramago',
        avail:true
      }
    ];
    this.books$=new BehaviorSubject<book[]>(this.books);
  }
  
  getAllBooks():Observable<any>{
    return this.http.get(`${this.url}/get-all`);
  }
  
  /*insertBook(newBook:book):Observable<any>{
    
  }*/
  
  sharingBooks():Observable<book[]>{
    return this.books$.asObservable();
  }
  
  setSharingBooks(newBook:book){
    newBook.id=this.books[this.books.length-1].id+1;
    newBook.avail=true;
    this.books.push(newBook);
    this.books$.next(this.books);
  }

  addBook(book:book){
    book.id=this.books[this.books.length-1].id+1;
    book.avail=true;
    this.books.push(book);
  }
}