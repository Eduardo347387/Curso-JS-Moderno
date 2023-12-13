import { Client } from "./cliente.js";

export class Company extends Client{
    constructor(nameClient,balance,category){
        super(nameClient,balance)
        this.category = category
    }

    getInfoCompany(){
        return ` The Company ${this.nameClient} is of category ${this.category} and has in balance of ${this.balance} US`
    }
}