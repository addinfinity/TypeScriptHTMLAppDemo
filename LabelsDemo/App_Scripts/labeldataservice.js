/// <reference path="label.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular-resource.d.ts" />
var LabelApplication;
(function (LabelApplication) {
    LabelApplication.LabelEditor.editorModule.factory('labelDataService', ['$resource', function (r) {
            return new LabelDataService(r);
        }]);
    var LabelDataService = (function () {
        function LabelDataService($resource) {
            this.resource = $resource("api/labels/:id", { id: "@id" }, {
                get: { method: "GET" },
                save: { method: "PUT" },
                create: { method: "POST" },
                query: { method: "GET", isArray: true },
                delete: { method: "DELETE" }
            });
        }
        LabelDataService.prototype.retriveAllLabels = function () {
            return this.resource.query();
        };
        LabelDataService.prototype.updateLabel = function (label) {
            return this.resource.save({ id: label.Id }, label);
        };
        LabelDataService.prototype.addColor = function (label) {
            this.resource.create(label);
            return this.resource.query();
        };
        return LabelDataService;
    }());
    LabelApplication.LabelDataService = LabelDataService;
})(LabelApplication || (LabelApplication = {}));
//# sourceMappingURL=labeldataservice.js.map