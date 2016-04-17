declare module LabelApplication.Rest {
    interface Label extends ng.resource.IResource<Label>{
        Id: number,
        Text: string,
        Color: string
    }
}