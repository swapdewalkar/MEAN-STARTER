import {Component} from 'angular2/core';
import {TaskComponent} from './components/tasks/tasks.component';
import {TaskService} from './services/task.service'

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    directives:[TaskComponent],
    providers:[TaskService]
})
export class AppComponent { }
