/*
function describeCountry(country, population, capitalCity) {
    return console.log(`${country} has ${population} million people and its capital city ${capitalCity}`);
}

const descGreatBritain = describeCountry(`Great Britain`, 56, `London`);

const descWales = describeCountry(`Wales`, 3, `Cardiff`);

const descScotland = describeCountry(`Scotland`, 6, `Edinburgh`);
console.log(descGreatBritain, descWales, descScotland);



function percentageOfWorld1(population) {
    let worldPopulation = 7900;
    let populationsPercent = `${(population/worldPopulation) * 100}%`
    return populationsPercent;
}

greatBritainPercent = percentageOfWorld1(70);
console.log(greatBritainPercent);

portugalPercent = percentageOfWorld1(10);
console.log(portugalPercent);

indiaPercent = percentageOfWorld1(1330);
console.log(indiaPercent);

const percentageOfWorld2 = function(population) {
    let worldPopulation = 7900;
    let populationsPercent2 = `${(population/worldPopulation) * 100}%`
    return populationsPercent2;
}

const greatBritainExpression = percentageOfWorld2(70);
const portugalExpression = percentageOfWorld2(10);
const indiaExpression = percentageOfWorld2(1330);

console.log(greatBritainExpression, portugalExpression, indiaExpression);


const percentageOfWorld3 = population => ( population / 7900) * 100;

const greatBritainArrow = percentageOfWorld3(70);
const portugalArrow = percentageOfWorld3(10);
const indiaArrow = percentageOfWorld3(1330);
console.log(greatBritainArrow, portugalArrow, indiaArrow);


function percentageOfWorld1(population) {
    let worldPopulation = 7900;
    let populationsPercent = `${(population/worldPopulation) * 100}%`
    return populationsPercent;
}

function describePopulation(country, population) {
    const populationsPercent = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${populationsPercent} of the world.`
}

const greatBritainString = describePopulation(`Great Britain`, 70);
console.log(greatBritainString);

const indiaBritainString = describePopulation(`India`, 70);
console.log(indiaBritainString);


calcAverage = (compete1, compete2, compete3) => (compete1 + compete2 + compete3) / 3;

const avgDolphins = calcAverage(44, 23, 71);
console.log(avgDolphins);
const avgKoalas = calcAverage(65, 54, 49);

const avgDolphins2 = calcAverage(85, 54, 41);
const avdKoalas2 = calcAverage(23, 34, 27);
console.log(avgDolphins2, avdKoalas2);

function checkWinner (avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`)
    } else {
        console.log(`No team wins...`);
    }
}

checkWinner(avgDolphins, avgKoalas);
checkWinner(avgDolphins2, avdKoalas2);


//Introduction to Arrays

const populations = [70, 10, 13, 1330];

console.log(populations.length === 4);

function percentageOfWorld1(population) {
    let worldPopulation = 7900;
    let populationsPercent = `${(population/worldPopulation) * 100}%`
    return populationsPercent;
}

const percentages = [
    percentageOfWorld1(populations[0]), 
    percentageOfWorld1(populations[1]), 
    percentageOfWorld1(populations[2]), 
    percentageOfWorld1(populations[3])
];
console.log(percentages);



const neighbours = [
    `Andorra`,
    `Belgium`,
    `Germany`,
    `Italy`,
    `Luxembourg`,
    `Monaco`,
    `Spain`,
    `Switzerland`
];

neighbours.push(`Utopia`);
console.log(neighbours);

neighbours.pop(`Utopia`);
console.log(neighbours);

if (neighbours.includes(`Germany`)) {
    console.log(`Probably a central European country :D`);
} else {
    console.log(`Probably not a central European country :D`);
}

neighbours[5] =  `Principality of Monaco`;
console.log(neighbours);


// Coding challenge #2

let tip = 0;

function calcTip(bill) {
    if(bill >= 50 && bill <= 300){
        return bill * 0.15;
    } else {
        return bill * 0.20;
    }
}

console.log(calcTip(44));

const bills = [125, 55, 44];
console.log(bills);
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])];
console.log(tips);

const total = [(bills[0] + tips[0]), (bills[1] + tips[1]), (bills[2] + tips[2])]; 
console.log(total);



const myCountry = {
    country: `Great Britain`,
    capital: `London`,
    language: `English`,
    population: 70,
    neighbours: [`England`, `Wales`, `Scotland`],
    describe: function() {
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
    },
    checkIsland: function() {
    //     if (this.neighbours.length === 0) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }
    return this.isIsland = this.neighbours.length === 0 ? true: false;
    }
}

// myCountry.population += 2;
myCountry[`population`] -= 2;


// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);
myCountry.describe();
console.log(myCountry.checkIsland());


const mark = {
    name : `Mark`,
    lastName : `Miller`,
    mass : 78,
    height : 1.69,
    BMI : function() {
        return this.mass / (this.height ** 2)
    }
};  

const john = {
    name : `John`,
    lastName : `Smith`,
    mass : 92,
    height : 1.95,
    BMI : function() {
        return this.mass / (this.height ** 2)
    }
}; 

console.log(mark.BMI());
console.log(john.BMI());
const higherBMI = () => mark.BMI < john.BMI ? `${john.name} ${john.lastName}'s BMI (${john.BMI()}) is higher than ${mark.name} ${mark.lastName}'s (${mark.BMI()})!` : `${mark.name} ${mark.lastName}'s BMI (${mark.BMI()}) is higher than ${john.name} ${john.lastName}'s BMI (${john.BMI()})!`;
console.log(higherBMI());

    for (let i = 0; i <51; i++) {
    console.log(`Voter number ${i} is currently voting`);
}



const populations = [70, 10, 13, 1330];

function percentageOfWorld1(population) {
    let worldPopulation = 7900;
    let populationsPercent = population/worldPopulation * 100;
    return populationsPercent;
}
let percentages2 = [];

function percentageOfWorld2() {
    for(i=0; i<populations.length; i++) {
        let percentage = percentageOfWorld1(populations[i])
        percentages2.push(percentage) ;
    }
};
percentageOfWorld2();
console.log(percentages2);

const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 
'Russia']];

for (let i = 0; i < listOfNeighbours.length; i++) {
    // console.log(`Neighbour ${listOfNeighbours[i]}`)
    for (let x = 0; x < listOfNeighbours[i].length; x++) {
        console.log(`Neighbour ${listOfNeighbours[i][x]}`);
        
    }
    
}

const population = [70, 10, 13, 1330];

function percentageOfWorld1(population) {
    let worldPopulation = 7900;
    let populationsPercent = population/worldPopulation * 100;
    return populationsPercent;
}

let percentage3 = [];
let i = 0;
while(i< population.length) {
    percentage3.push(percentageOfWorld1(population[i]));
    i++
};

console.log(percentage3);
*/

const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for(let i = 0; i < bill.length;i++){
    if(bill[i] >= 50 && bill[i] <= 300){
        smallTip = bill[i] * 0.15;
        tips.push(smallTip);
        totals.push(bill[i] + smallTip);
    } else {
        bigTip = bill[i] * 0.20;
        tips.push(bigTip);
        totals.push(bill[i] + bigTip);

    }
} 

console.log(tips);
console.log(totals);



function calcAverage(arr) {
    let sum = 0;
    for(i=0; i<arr.length; i++){
        sum += arr[i];
    } return sum / arr.length
};

console.log(calcAverage(totals))