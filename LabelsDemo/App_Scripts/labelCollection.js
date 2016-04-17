/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="labeleditor.ts" />
/// <reference path="labeldataservice.ts" />
var LabelApplication;
(function (LabelApplication) {
    var LabelCollection = (function () {
        function LabelCollection($scope, service) {
            this.$scope = $scope;
            this.service = service;
            this.sequence = service.retriveAllLabels();
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
        LabelCollection.prototype.addColor = function () {
            var item = {
                Id: 6,
                Text: this._labelMessage,
                Color: this._colorValue
            };
            this.sequence = this.service.addColor(item);
        };
        return LabelCollection;
    }());
    LabelApplication.LabelCollection = LabelCollection;
    LabelApplication.LabelEditor
        .editorModule
        .controller('labelCollection', ["$scope", "labelDataService", LabelCollection]);
})(LabelApplication || (LabelApplication = {}));
//# sourceMappingURL=labelCollection.js.map