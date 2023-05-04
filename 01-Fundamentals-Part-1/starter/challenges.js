/*
const markHeightMTestData1 = 1.69;
const markWeightKgTestData1 = 78;
const markHeightMTestData2 = 1.88;
const markWeightKgMTestData2 = 95;

const johnHeightMTestData1 = 1.95;
const johnWeightKgTestData1 = 92;
const johnHeightMTestData2 = 1.76;
const johnWeightKgTestData2 = 85

const BMIMark1 = markWeightKgTestData1 / markHeightMTestData1 ** 2 
const BMIJohn1 = johnWeightKgTestData1 / johnHeightMTestData1 ** 2 
console.log(BMIMark1, BMIJohn1)

const markHigherBMI = BMIMark1 > BMIJohn1
console.log(markHigherBMI);

const BMIMark2 = markWeightKgMTestData2 / markHeightMTestData2 **2
const BMIJohn2 = johnWeightKgTestData2 / johnHeightMTestData2 **2

const markHigherBMI2 = BMIMark2 > BMIJohn2
console.log(markHigherBMI2);

if (BMIMark1 > BMIJohn1) {
    console.log(`Mark's BMI (${BMIMark1}) is higher than John's (${BMIJohn1}). In fact, it's (${BMIMark1} - ${BMIJohn1}) higher!`)
} else {
    console.log(`John's BMI (${BMIJohn1}) is higher than Mark's (${BMIMark1})! In fact, it's (${BMIJohn1} - ${BMIMark1})`);
}
*/

// Coding Challenge #3

// const dolphinData1 = [97, 112, 101];

// const koalaData1 = [109, 95, 123];

// let dolphinSum = 0;

// for (let i = 0; i < dolphinData1.length; i++) {
//     dolphinSum += dolphinData1[i];
// }

// const dolphinData1Avg = dolphinSum / dolphinData1.length;
// console.log(dolphinData1Avg);

// let koalaSum = 0;

// for (let i = 0; i < koalaData1.length; i++) {
//     koalaSum += koalaData1[i];
// }

// const koalaData1Avg = koalaSum / koalaData1.length;
// console.log(koalaData1Avg);

// if (dolphinData1Avg === koalaData1Avg && dolphinData1Avg >= 100 && koalaData1Avg >= 100) {
//     console.log(`It's a draw! Both teams get a trophy! 🏆`);
// } else if (dolphinData1Avg === koalaData1Avg) {
//     console.log(`It's a draw! But they didn't score more than 100 points, so neith get a trophy! 😭`);
// } else if(dolphinData1Avg > koalaData1Avg && dolphinData1Avg > 100) {
//     console.log(`Dolphins win! Go Dolphins! 🐬`)
// } else if(dolphinData1Avg > koalaData1Avg) {
//     console.log(`Dolphins had more points, but they didn't score enough to win!`);
// } else if(koalaData1Avg < 100) {
//     console.log(`Koalas had more points, but they didn't score enough to win!`);
// } else {
//     console.log(`The Koalas win! Go Koalas! 🐨`);
// }

//Bonus 2

// const dolphinData1 = [97, 112, 101];

// const koalaData1 = [109, 95, 106];

// let dolphinSum = 0;

// for (let i = 0; i < dolphinData1.length; i++) {
//     dolphinSum += dolphinData1[i];
// }

// const dolphinData1Avg = dolphinSum / dolphinData1.length;
// console.log(dolphinData1Avg);

// let koalaSum = 0;

// for (let i = 0; i < koalaData1.length; i++) {
//     koalaSum += koalaData1[i];
// }

// const koalaData1Avg = koalaSum / koalaData1.length;
// console.log(koalaData1Avg);

// if (dolphinData1Avg === koalaData1Avg && dolphinData1Avg >= 100 && koalaData1Avg >= 100) {
//     console.log(`It's a draw! Both teams get a trophy! 🏆`);
// } else if (dolphinData1Avg === koalaData1Avg) {
//     console.log(`It's a draw! But they didn't score more than 100 points, so neith get a trophy! 😭`);
// } else if(dolphinData1Avg > koalaData1Avg && dolphinData1Avg >= 100) {
//     console.log(`Dolphins win! Go Dolphins! 🐬`)
// } else if(dolphinData1Avg > koalaData1Avg) {
//     console.log(`Dolphins had more points, but they didn't score enough to win!`);
// } else if(koalaData1Avg <= 100) {
//     console.log(`Koalas had more points, but they didn't score enough to win!`);
// } else {
//     console.log(`The Koalas win! Go Koalas! 🐨`);
// }

const bill = 50; 
const tip = (bill >= 50 && bill <= 250 ? 0.15 * bill: 0.20 * bill);
// const tip = bill * tipPercent This is unnecessary, added to above statement.
const finalValue = bill + tipAmount;

console.log(`The bill was ${bill}, the tip was ${tip} and the total value was ${bill + tip}`);


