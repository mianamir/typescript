import {Invoice} from './classes/Invoice';
import {Payment} from './classes/Payment';
import {HasFormatter} from './interfaces/HasFormatter';

let doc1: HasFormatter;
let doc2: HasFormatter;

doc1 = new Invoice('Amir', 'Software Dev.', 56789);
doc2 = new Payment('Savvy', 'Software Dev.', 789);


// make array 
let docs: HasFormatter[] = [];

docs.push(doc1);
docs.push(doc2);

console.log(docs);


const inv1 = new Invoice('Amir', ' testing details', 5689);
const inv2 = new Invoice('Mian', ' testing details', 5689);

// console.log(inv1, inv2);


let invoices: Invoice[] = [];

invoices.push(inv1);
invoices.push(inv2);

console.log(invoices);
