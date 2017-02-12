import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorComponent} from './author.component';
@Component({
    selector: 'my-app',
    template: `
              <h1>HomePage</h1>
              <courses></courses>
              <author></author>`,
    directives:[CoursesComponent,AuthorComponent]
})
export class AppComponent { }
