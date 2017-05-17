import { NgModule, Injectable }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { TasksService } from './Services/TasksService/TasksService'

import { PlayGroundComponent } from './Playground/Playground.component';

import { OtherComponent } from './Other/Other.component'

import { Http, Response } from '@angular/http';

const appRoutes: Routes = [
    { path: 'Playground', component: PlayGroundComponent },
    { path: 'Other', component: OtherComponent }
];

@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, PlayGroundComponent, OtherComponent],
    bootstrap: [AppComponent],
    providers: [TasksService]
})
export class AppModule { }
