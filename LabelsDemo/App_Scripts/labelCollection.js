/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="labeleditor.ts" />
/// <reference path="labeldataservice.ts" />
var LabelApplication;
(function (LabelApplication) {
    var LabelCollection = (function () {
        function LabelCollection($scope, service) {
            var _this = this;
            this.$scope = $scope;
            this.service = service;
            service.setUpdateHandler(function (r) { return _this.sequence = r; });
        }
        Object.defineProperty(LabelCollection.prototype, "newColorValue", {
            get: function () {
                return this._colorValue;
            },
            set: function (value) {
                this._colorValue = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LabelCollection.prototype, "newLabelMessage", {
            get: function () {
                return this._labelMessage;
            },
            set: function (value) {
                this._labelMessage = value;
            },
            enumerable: true,
            configurable: true
        });
        LabelCollection.prototype.update = function (label) {
            this.service.updateLabel(label);
        };
        LabelCollection.prototype.delete = function (label) {
            this.service.deleteLabel(label.Id);
        };
        LabelCollection.prototype.addColor = function () {
            this.service.addColor(this._colorValue, this._labelMessage);
            this._colorValue = "";
            this._labelMessage = "";
        };
        return LabelCollection;
    }());
    LabelApplication.LabelCollection = LabelCollection;
    LabelApplication.LabelEditor
        .editorModule
        .controller('labelCollection', ["$scope", "labelDataService", LabelCollection]);
})(LabelApplication || (LabelApplication = {}));
//# sourceMappingURL=labelCollection.js.map