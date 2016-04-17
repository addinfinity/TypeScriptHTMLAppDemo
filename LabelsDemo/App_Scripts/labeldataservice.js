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
            this.retriveAllLabels();
        }
        LabelDataService.prototype.setUpdateHandler = function (evHandler) {
            this.onUpdate = evHandler;
        };
        LabelDataService.prototype.retriveAllLabels = function () {
            var _this = this;
            return this.resource.query().$promise.then(function (result) {
                _this.currentData = result;
                _this.onUpdate(_this.currentData);
            });
        };
        LabelDataService.prototype.updateLabel = function (label) {
            var _this = this;
            return this.resource.save({ id: label.Id }, label, function () { return _this.retriveAllLabels(); });
        };
        LabelDataService.prototype.addColor = function (color, message) {
            var _this = this;
            var item = { Id: 0, Color: color, Text: message };
            this.resource.create(item, function () { return _this.retriveAllLabels(); });
        };
        LabelDataService.prototype.deleteLabel = function (id) {
            var _this = this;
            this.resource.delete({ Id: id }, function () { return _this.retriveAllLabels(); });
        };
        return LabelDataService;
    }());
    LabelApplication.LabelDataService = LabelDataService;
})(LabelApplication || (LabelApplication = {}));
//# sourceMappingURL=labeldataservice.js.map