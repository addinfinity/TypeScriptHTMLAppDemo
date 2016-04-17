/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="labeleditor.ts" />
/// <reference path="labeldataservice.ts" />

module LabelApplication {

    export class LabelCollection {
        constructor(private $scope: ng.IScope,
            private service: LabelDataService) {

            service.setUpdateHandler((r) => this.sequence = r);
        }

        sequence: Array<LabelApplication.Rest.Label>;
        private _colorValue: string;

        get newColorValue() {
            return this._colorValue;
        }
        set newColorValue(value:string) {
            this._colorValue = value;
        }
        private _labelMessage: string;

        get newLabelMessage() {
            return this._labelMessage;
        }
        set newLabelMessage(value: string) {
            this._labelMessage= value;
        }

        public update(label: Rest.Label) {
            this.service.updateLabel(label);
        }

        public delete(label: Rest.Label) {
            this.service.deleteLabel(label.Id);
        }

        public addColor() {
            this.service.addColor(this._colorValue, this._labelMessage);
            this._colorValue = "";
            this._labelMessage = "";
        }
    }

    LabelEditor
        .editorModule
        .controller('labelCollection', ["$scope", "labelDataService", LabelCollection]);
}