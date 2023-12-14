import newFuncion, { Client, checkBalance, getInfo, nameClient,balance } from "./cliente.js";

import { Company } from "./empresa.js";

newFuncion()
console.log(nameClient)
console.log(balance)

console.log(getInfo(nameClient,balance))

checkBalance(balance)

// Create a client instance
const newClient = new Client(nameClient,balance) 
console.log(newClient.getInfo())

// Create a client instance

const newCompany = new Company('Software Edward',2555000,'Software development')

console.log(newCompany.getInfoCompany())

