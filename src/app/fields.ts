export class Fields {
    name !: string;
    type !: string;
    sqltype !: string;
    domain !: string;
    defaultValue !: string;


    constructor(name: string, type: string, sqltype:string, domain: string,defaultValue: string  ){
        this.name = name;
        this.type = type;
        this.sqltype= sqltype;
        this.domain = domain;
        this.defaultValue = defaultValue;

    }

}
