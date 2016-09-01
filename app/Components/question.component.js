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
var core_1 = require('@angular/core');
var core_2 = require('@angular/core');
var QuestionService_1 = require('./../Services/QuestionService');
var router_1 = require('@angular/router');
var QuestionComponent = (function () {
    function QuestionComponent(_questionService) {
        var _this = this;
        this._questionService = _questionService;
        this.Question = "";
        this.questions = [];
        this._questionService.getQuestions()
            .subscribe(function (a) {
            _this.jqueryfun();
            _this.questions = a;
            console.log(a);
        });
    }
    QuestionComponent.prototype.jqueryfun = function () {
        jQuery("#sortable").sortable();
        jQuery("#sortable").disableSelection();
        jQuery("#sortable li").mousedown(function () {
            jQuery(this).css('cursor', 'grabbing');
        });
        jQuery("#sortable li").mouseup(function () {
            jQuery(this).css('cursor', 'grab');
        });
    };
    QuestionComponent.prototype.onSubmit = function () {
        var count = 0;
        if (this.Question == undefined || this.Question == "") {
            count = count + 1;
            var div = document.getElementById("questiondiv");
            div.className += " has-error";
        }
        if (this.QuestionHeading == undefined || this.QuestionHeading == "") {
            count = count + 1;
            var div = document.getElementById("questiontypediv");
            div.className += " has-error";
        }
        if (count == 0) {
            this._questionService.addQuestion(this.QuestionHeading, this.Question).subscribe(function (a) {
                window.location.reload();
            });
        }
    };
    QuestionComponent.prototype.deleteQuestion = function (questionId) {
        this._questionService.deleteQuestion(questionId).subscribe(function (a) {
            window.location.reload();
        });
    };
    __decorate([
        core_2.Input(), 
        __metadata('design:type', String)
    ], QuestionComponent.prototype, "Question", void 0);
    __decorate([
        core_2.Input(), 
        __metadata('design:type', String)
    ], QuestionComponent.prototype, "QuestionHeading", void 0);
    QuestionComponent = __decorate([
        core_1.Component({
            selector: 'question',
            templateUrl: './../views/Question.html',
            providers: [QuestionService_1.QuestionService],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [QuestionService_1.QuestionService])
    ], QuestionComponent);
    return QuestionComponent;
}());
exports.QuestionComponent = QuestionComponent;
//# sourceMappingURL=question.component.js.map