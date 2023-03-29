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
*/