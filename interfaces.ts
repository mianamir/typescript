interface IsPerson{
    name: string;
    age: number;

    speak(a: string): void;
    spend(a: number): number;

} // interface ends

const me: IsPerson = {
    name: 'Amir',
    age: 34,
    speak(text: string): void{
        console.log(text);
    },
    spend(amount: number): number{
        console.log('I spend: ', amount);
        return amount;
    }

}; 

const greet_person = (person: IsPerson) =>{
    console.log('Hey', person.name);
}

greet_person(me);

console.log(me);
