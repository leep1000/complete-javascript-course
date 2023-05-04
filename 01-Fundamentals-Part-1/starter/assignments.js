// let country = "Great Britain";
// let continent = "Europe";
// let population = "70000000";

// console.log(country, continent, population);

// let isIsland = true
// let language = 'English';

// console.log(population)
// console.log(isIsland);
// console.log(country);
// console.log(language);

// console.log(population / 2);

// population++;
// console.log(population);

// const finlandPopulation = 6000000;
// console.log(population > finlandPopulation);

// // description = country + ' is in ' + continent + ", and it's " + population + ' people speak ' + language + '.';
// // console.log(description);

// description = `${country} is in ${continent}, and it's ${population} people speak ${language}.`;
// console.log(description);

// const averagePopulation = 130000000;

// if (population > averagePopulation) {
//     let abovePopulation = (population - averagePopulation);
//     console.log(`${country}'s population is ${abovePopulation} above average.`);
// } else {
//     let belowPopulation = (averagePopulation - population);
//     console.log(`${country}'s population is ${belowPopulation} below average.`);
// }

// numNeighbours = Number(prompt(`How many neighbour countries does your country have?`));

// if (numNeighbours === 1) {
//     console.log(`Only 1 border!`);
// } else if (numNeighbours > 1) {
//     console.log(`More than one border`);
// } else {
//     console.log(`No borders`);
// };

// const speaksEnglish = true;
// const population = 45;
// const isIsland = false;
// const country = `Great Britain`;

// if (speaksEnglish && population < 50 && !isIsland) {
//     console.log(`You should live in ${country} :)`);
// } else {
//     console.log(`${country} does not meet your criteria :(`);
// }

// const language = `english`;

// switch (language) {
//     case 'chinese':
//     case 'mandarin':
//         console.log(`MOST number of native speakers!`);
//     break;
//     case `spanish`:
//         console.log('2nd place in number of native speakers');
//     break;
//     case `hindi`:
//         console.log('3rd place');
//     break;
//     case `arabic`:
//         console.log('Number 4');
//     break;
//     case `arabic`:
//         console.log('5th most spoken language');
//     break;
//     default:
//         console.log('Great language too :D');
// }

const population = 70;
country = `United Kingdom`;

// population > 33 ? console.log(`The United Kingdom's population is above average`) : console.log(`The United Kingdom's population is below average`);
console.log(`${country}'s population is ${population > 33 ? `above` : `below`} average`);