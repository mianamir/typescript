type StringOrNum = string | number;
type ObjOrName = {name: string, uid: StringOrNum}

const log_details = (uid: StringOrNum, item: string) =>{
    console.log(`${item} has a uid of ${uid}`);
}

const testing = (user: ObjOrName) =>{
    console.log(`${user.name} again testing...`);
}