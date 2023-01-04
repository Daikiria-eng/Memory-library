import { Injectable } from '@angular/core';
import { book } from '../dto/book.dto';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  url=Environment.urlApi;
  books:book[]=[];
  private books$:BehaviorSubject<book[]>;

  constructor(private http:HttpClient){
    this.books$=new BehaviorSubject<book[]>(this.books);
  }
  
  getAllBooks():Observable<any>{
    return this.http.get(`${this.url}/books/get-all`);
  }
  
  insertBook(newBook:book):Observable<any>{
    newBook.avail=true;
    const headers=new HttpHeaders({
      'Content-Type':'Application/json'
    });
    return this.http.post<book>(`${this.url}/insert`,newBook,{headers});
  }
  
  sharingBooks():Observable<book[]>{
    return this.books$.asObservable();
  }
  
  setSharingBooks(newBook:book){
    newBook.id=this.books[this.books.length-1].id+1;
    newBook.avail=true;
    this.books.push(newBook);
    this.books$.next(this.books);
  }

  addBook(book:book):boolean{
    const booksLength:number=this.books.length;
    let exists:boolean=false;
    for(let i=0;i<booksLength;i++){
      if(this.books[i].title==book.title)
        exists=true;
    }
    
    if(!exists){
      book.id=this.books[booksLength-1].id+1;
      book.avail=true;
      this.books.push(book);
      return true;
    }else{
      alert('El libro Ya esxiste');
      return false;
    }
  }
}