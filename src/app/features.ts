export class Features {
    HUDUMA_CENTER !: string;
    TOTAL_NUMBER !: number;
    YEAR !: Date;
    OBJECT !: number; 


    constructor(HUDUMA_CENTER: string, TOTAL_NUMBER: number,YEAR: Date,  OBJECT: number){
        this.HUDUMA_CENTER = HUDUMA_CENTER;
        this.TOTAL_NUMBER = TOTAL_NUMBER
        this.YEAR = YEAR;
        this.OBJECT = OBJECT;
        
    }


}
