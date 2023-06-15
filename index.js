// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function(drivers) {
     return drivers.slice(0, 2);
 };
 const firstTwoDrivers = returnFirstTwoDrivers(drivers);
console.log(firstTwoDrivers);

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(2, 4);
};
const lastTwoDrivers = returnLastTwoDrivers(drivers);
console.log(lastTwoDrivers);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  }
const fare = 5;
const fareMultiplier = createFareMultiplier(5);
const totalFare = fareMultiplier(fare);
console.log(totalFare);

const fareDoubler = function(fare) {
    return fare*2
}

const fareTripler = function(fare) {
    return fare*3
}

function selectDifferentDrivers(drivers, selectingFunction) {
    return selectingFunction(drivers);
  }
// const firstTwoDrivers = selectDifferentDrivers(drivers, returnFirstTwoDrivers);
// console.log(firstTwoDrivers);

// const lastTwoDrivers = selectDifferentDrivers(drivers, returnLastTwoDrivers);
// console.log(lastTwoDrivers);