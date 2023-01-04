import { Component,Input,Output,EventEmitter } from '@angular/core';
import { book } from 'src/app/dto/book.dto';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent {
  @Input() books:book[]=[];
  @Output() deleteBook:EventEmitter<book>=new EventEmitter();
  
  onDelete(book:book){
    this.deleteBook.emit(book);
  }
}