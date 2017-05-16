import { Injectable } from '@angular/core';

@Injectable()
export class TasksService {
    tasks = ["First Task", "Second Task", "Third Task"];

    getTasks(): Array<string>{
        return this.tasks;
    }

    addTask(task: string) {
        this.tasks.push(task);
    }
}