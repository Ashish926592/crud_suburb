export class suburbEntity {
    constructor(
       
        private name:string,
        private postcode:number,
        private state:string,
        private id?:number
    )
    {}

    getId():number | undefined{
        return this.id;
    }
    getName():string{
        return this.name;
    }
    getState():string{
        return this.state;
    }
    getPostcode():number{
        return this.postcode;
    }
    setId(id:number){
        this.id = id;
    }
    setName(name:string){
        this.name = name;
    }
    setState(state:string){
        this.state = state;
    }
    setPostcode(postcode:number){
        this.postcode = postcode;
    }
}