"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TasksService_1 = require("../Services/TasksService/TasksService");
var PlayGroundComponent = (function () {
    function PlayGroundComponent(tasksService) {
        this.tasksService = tasksService;
        this.toggle = false;
        this.show = false;
        this.tasks = ['First Task', 'Second Task'];
        this.myNumber = 100;
        this.sample = "";
        this.newTask = "";
    }
    PlayGroundComponent.prototype.doThis = function () {
        this.myNumber = 200;
    };
    return PlayGroundComponent;
}());
PlayGroundComponent = __decorate([
    core_1.Component({
        selector: 'play',
        templateUrl: './Playground.component.html',
        styles: [".red{color:red;}", ".blue{color:blue;}"]
    }),
    __metadata("design:paramtypes", [TasksService_1.TasksService])
], PlayGroundComponent);
exports.PlayGroundComponent = PlayGroundComponent;
//# sourceMappingURL=Playground.component.js.map