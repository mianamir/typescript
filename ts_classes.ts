import {Invoice} from './classes/invoice.ts';


const inv1 = new Invoice('Amir', ' testing details', 5689);
const inv2 = new Invoice('Mian', ' testing details', 5689);

// console.log(inv1, inv2);


let invoices: Invoice[] = [];

invoices.push(inv1);
invoices.push(inv2);

console.log(invoices);
