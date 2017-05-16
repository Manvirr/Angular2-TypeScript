import { Component } from '@angular/core';
import { TasksService } from '../Services/TasksService/TasksService'

@Component({
    selector: 'play',
    templateUrl: './Playground.component.html',
    styles: [".red{color:red;}", ".blue{color:blue;}"]    
})

export class PlayGroundComponent {
    toggle: boolean = false;
    show: boolean = false;
    tasks: Array<string> = ['First Task', 'Second Task'];
    myNumber: Number = 100;
    sample: string = "";

    doThis() {
        this.myNumber = 200;
    }

    newTask: string = "";
    constructor(public tasksService: TasksService) {
            
    }

    

}
