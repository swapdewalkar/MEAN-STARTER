import {Component} from 'angular2/core';
import {TaskComponent} from './components/tasks/tasks.component';
@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    directives:[TaskComponent]
})
export class AppComponent { }
