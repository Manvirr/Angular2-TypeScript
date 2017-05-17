import { Injectable } from '@angular/core';

@Injectable()
export class TasksService {
    dummyTasks = ["First Task", "Second Task", "Third Task"];

    getDummyTasks(): Array<string>{
        return this.dummyTasks;
    }

    addDummyTask(task: string) {
        this.dummyTasks.push(task);
    }


}