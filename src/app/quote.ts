export class Quote {
  public showDescription:boolean;
  constructor(public quote:string, public author:string, public submitter:string,completeDate:Date,){
        this.showDescription=false
}
}
