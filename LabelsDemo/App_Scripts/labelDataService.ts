/// <reference path="label.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular-resource.d.ts" />

module LabelApplication {

    import Rest = LabelApplication.Rest;
    import ngr = ng.resource;

    LabelEditor.editorModule.factory('labelDataService', ['$resource', (r) => {
        return new LabelDataService(r);
    }]);

    interface ILabelResourceClass extends ngr.IResourceClass<ngr.IResource<Rest.Label>> {
        create(label: Rest.Label);
    }

    export class LabelDataService {

        private resource: ILabelResourceClass;
        private currentData: Array<Rest.Label>;
        private onUpdate: (labels: Array<Rest.Label>) => void;

        constructor($resource: ngr.IResourceService) {
            this.resource = <ILabelResourceClass> $resource("api/labels/:id", { id: "@id" },
                {
                    get: { method: "GET" },
                    save: { method: "PUT" },
                    create: { method: "POST" },
                    query: { method: "GET", isArray: true },
                    delete: { method: "DELETE" }
                });
        }

        public setUpdateHandler(evHandler: (labels: Array<Rest.Label>) => void){
            this.onUpdate = evHandler;
        }


        public retriveAllLabels() {
            return this.resource.query().$promise.then((result) => {
                this.currentData = result;
                this.onUpdate(this.currentData);
            });
        }

        public updateLabel(label: Rest.Label) {
            return this.resource.save({ id: label.Id }, label);
        }

        public addColor(label: Rest.Label) {
            this.resource.create(label);
            return this.resource.query();
        }
    }
}