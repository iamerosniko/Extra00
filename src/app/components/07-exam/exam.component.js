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
var core_1 = require("@angular/core");
var random_question_service_1 = require("../../services/random-question.service");
var ExamComponent = (function () {
    function ExamComponent(randomQuestionService) {
        this.randomQuestionService = randomQuestionService;
        this.sample = 'sample1';
        this.questions = [];
        this.seasons = [
            'Winter',
            'Spring',
            'Summer',
            'Autumn',
        ];
    }
    ExamComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.randomQuestionService.getQuestions()
            .then(function (rq) { return _this.questions = rq; });
    };
    return ExamComponent;
}());
ExamComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'exam.component.html',
        styleUrls: ['exam.css'],
    }),
    __metadata("design:paramtypes", [random_question_service_1.RandomQuestionService])
], ExamComponent);
exports.ExamComponent = ExamComponent;