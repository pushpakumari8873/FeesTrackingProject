
// 

export class enrollment {
    enrollmentId: number;
    studentName: string;
    contactNo: string;
    totalFees: number;
    emi1: number;
    emi2: number;
    emi3: number;
    totalReceived: number;
    status: string;
    isSoftDelete: boolean;
    batchId: number;


    constructor() {
        this.enrollmentId = 0;
        this.studentName = "";
        this.contactNo = "";
        this.totalFees = 0;
        this.emi1 = 0;
        this.emi2 = 0;
        this.emi3 = 0;
        this.totalReceived = 0;
        this.status = "";
        this.isSoftDelete = false;
        this.batchId = 0;
    }
}


export interface IBatch {

    batchId: number,
    batchName: string,
    createdDate: string
}

export interface IDashboard {
    totalbatches: number,
    totalamounttobereceived: number,
    totalreceived: number,
    totalpending: number,
    batchwisestats: IBatchWisePayment[]
}

export interface IBatchWisePayment {
    batchid: number,
    batchname: string,
    totalamount: number,
    totalreceived: number,
    totalpending: number
}

