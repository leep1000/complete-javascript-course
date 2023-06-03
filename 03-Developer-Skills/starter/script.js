// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// bug

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."
/*
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between the highest and lowest temperature in the array.
// - How to compute max and min temperature
// - What to do when a sensor error occurs?

// 2) Breaking up into sub-problems
// - how to ignores errors
// - Find min and max temp
// - then return max minus min

function calcAmplitude(temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    let currentTemp = temps[i];
    if (typeof currentTemp !== 'number') continue;

    if (currentTemp > max) {
      max = currentTemp;
    }
    if (currentTemp < min) {
      min = currentTemp;
    }
  }
  console.log(max, min);
  return max - min;
}

const amplitude = calcAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

function newCalcAmplitude(temp1, temp2) {
  let mergedTemps = [...temp1, ...temp2];

  let max = mergedTemps[0];
  let min = mergedTemps[0];

  for (let i = 0; i < mergedTemps.length; i++) {
    let currentTemp = mergedTemps[i];
    if (typeof currentTemp !== 'number') continue;

    if (currentTemp > max) {
      max = currentTemp;
    }
    if (currentTemp < min) {
      min = currentTemp;
    }
  }
  console.log(max, min);
  return max - min;
}

const mergeAmplitude = newCalcAmplitude([1, 5, 9], [21, 4, 8]);
console.log(`Merged amplitude is ${mergeAmplitude}`);

*/

// 1) Understanding the problem
// - Need to return a string
// - What the string will contain depends on the arr argument

// 2) Breaking up into sub-problems
// - Need to use template literals
// - The days will depend on the index and length of the arr
// - maybe index of item +1?
// actually no, can just use the loop

function printForecast(arr) {
  let returnedString = `...`;
  // let dayNumber = 0;
  for (let index = 0; index < arr.length; index++) {
    let currentTemp = arr[index];
    // this was unnecessary due to already having index which does the exact same thing
    // dayNumber++ ;
    returnedString += ` ${currentTemp}ºC in ${index + 1} days ...`;
    console.log(returnedString);
  }
  console.log(returnedString);
  return returnedString;
}

const arr = [12, 5, -5, 0, 4];
printForecast(arr);
