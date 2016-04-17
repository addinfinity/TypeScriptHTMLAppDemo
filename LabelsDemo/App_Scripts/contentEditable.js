/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="labeleditor.ts" />
var LabelApplication;
(function (LabelApplication) {
    var ContentEditable = (function () {
        function ContentEditable() {
            this.restrict = 'A';
            this.require = 'ngModel';
            this.link = function (scope, element, attrs, ngModel) {
                function read() {
                    ngModel.$setViewValue(element.html());
                }
                ngModel.$render = function () {
                    element.html(ngModel.$viewValue || "");
                };
                element.on("blur keyup change", function () {
                    scope.$apply(read);
                });
            };
        }
        ContentEditable.factory = function () {
            return function () { return new ContentEditable(); };
        };
        return ContentEditable;
    }());
    LabelApplication.LabelEditor.editorModule.directive("contenteditable", ContentEditable.factory());
})(LabelApplication || (LabelApplication = {}));
//# sourceMappingURL=contentEditable.js.map