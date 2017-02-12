import {Component} from 'angular2/core'
import {AuthorService} from './author.service'
@Component({
  selector:'author',
  template:`
    <h2>Author List</h2>
    {{ title }}
    <ul>
      <li *ngFor="#author of authors">
      {{ author }}</li>
    </ul>
  `,
  providers:[AuthorService]
})
export class AuthorComponent{
  title: string="The title of author page";
  authors:string[];

  constructor(authorService:AuthorService){
    this.authors=authorService.getAuthors();
  }
}
