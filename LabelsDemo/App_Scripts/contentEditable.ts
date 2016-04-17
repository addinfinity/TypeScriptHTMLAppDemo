﻿/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="labeleditor.ts" />

module LabelApplication {
    class ContentEditable implements ng.IDirective {
        static factory(): ng.IDirectiveFactory {
            return () => new ContentEditable();
        }

        restrict = 'A';
        require = 'ngModel';

        link = (scope: ng.IScope, element: ng.IRootElementService,
            attrs: any, ngModel: ng.INgModelController) => {
            function read() {
                ngModel.$setViewValue(element.html());
            }

            ngModel.$render = function () {
                element.html(ngModel.$viewValue || "");
            }

            element.on("blur keyup change", function () {
                scope.$apply(read);
            });
        };
    }

    LabelEditor.editorModule.directive("contenteditable", ContentEditable.factory());
}