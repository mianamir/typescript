const addID = (obj: object) =>{
    let uid = Math.floor(Math.random() * 1010);

    return {...obj, uid};
}

let doc_1 = addID({name: 'Amir', age: 20});

console.log(doc_1);