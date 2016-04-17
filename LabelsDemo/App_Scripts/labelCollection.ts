/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="labeleditor.ts" />
/// <reference path="labeldataservice.ts" />

module LabelApplication {

    export class LabelCollection {
        constructor(private $scope: ng.IScope,
            private service: LabelDataService) {

            this.sequence = service.retriveAllLabels();
        }

        sequence: ng.resource.IResourceArray<ng.resource.IResource<LabelApplication.Rest.Label>>;
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

        public addColor() {
            var item: Rest.Label = {
                Id: 6,
                Text: this._labelMessage,
                Color: this._colorValue
            };

            this.sequence = this.service.addColor(item);

        }
    }

    LabelEditor
        .editorModule
        .controller('labelCollection', ["$scope", "labelDataService", LabelCollection]);
}