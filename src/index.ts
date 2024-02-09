/*let user= {
    name: 'Jai',
    age: 18
}
function logObject(user: User){
    console.log(user);
}
logObject(user);

class User{
    name : string;
    birthdate : Date;

    constructor(name: string, birthdate: Date){
        this.name = name;
        this.birthdate = birthdate;
    }
}
let user1=new User('Jai',new Date('2004-02-15'));*/





/* function logObject(dog: Dog){
    console.log(dog);
}
class Dog{
    name :string;
    tricksKnown: number;

    constructor(name: string, tricksKnown: number){
        this.name= name;
        this.tricksKnown= tricksKnown;
    }
}
let dog1= new Dog('jack',2)
logObject(dog1);*/
function evenOrOdd(sport:Sport){
    if (sport.activePlayers %2 ===0){
        console.log('Even number of Active Players')
    }else console.log('Odd number of Active Players')
}
function evenOrOdd2(sport:Sport){
    if (sport.playersOnTeam === undefined ){
        console.log('Unknown');
    }
    else if (sport.playersOnTeam!==undefined && sport.playersOnTeam %2 ===0){
        console.log('Even number of Players on team')
    }else console.log('Odd number of Players on team')
}

function logObject(sport: Sport){
    console.log(sport);
    if (sport.playersOnTeam === undefined){
        console.log('Players on Team Unknown')
    }
}
class Sport{
    name :string;
    activePlayers: number;
    playersOnTeam?: number;

    constructor(name: string, activePlayers: number, playersOnTeam?: number){
        if (playersOnTeam !==undefined){
            this.playersOnTeam= playersOnTeam;
        }
        this.name= name;
        this.activePlayers= activePlayers;

    }
}
let sport1= new Sport('Volleyball',6 ,20)
logObject(sport1);
evenOrOdd(sport1);
evenOrOdd2(sport1);

let sport2= new Sport('Football',11,57)
logObject(sport2);
evenOrOdd(sport2);
evenOrOdd2(sport2);

let sport3= new Sport ('Basketball',5)
logObject(sport3);
evenOrOdd(sport3);
evenOrOdd2(sport3);
