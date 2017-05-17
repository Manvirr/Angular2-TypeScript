import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TasksService {
    dummyTasks = ["First Task", "Second Task", "Third Task"];

    getDummyTasks(): Array<string>{
        return this.dummyTasks;
    }

    addDummyTask(task: string) {
        this.dummyTasks.push(task);
    }

    constructor(private _http: Http) { }

    tasks: any;

    getTasks() {
        var promise = this._http.get("tasks.json")
            .map((response: Response) => response.json().data)
            .toPromise();

        promise.then(tasksFromServer => this.tasks = tasksFromServer);

        
    }

    

}