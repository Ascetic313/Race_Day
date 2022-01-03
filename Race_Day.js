let raceNumber = Math.floor(Math.random() * 1000);

// Creating a variable//
let registeredEarly = false

// Creating a variable for Runner's Age//
let runnersAge = 18

if (runnersAge > 18 && registeredEarly) {raceNumber += 1000}

// Creating a seperate control flow //
if (runnersAge > 18 && registeredEarly === true) {console.log(`Hello race number ${raceNumber}! your race time is 9:30am`);}
else if (runnersAge > 18 && registeredEarly !== true) {console.log(`Hello race number ${raceNumber}! your race time is 11:00am`)}
else if (runnersAge < 18) {console.log(`Hello racenumber ${raceNumber}! your race time is 12:30pm`)}
if (runnersAge === 18) {console.log(`Hello! kindly see the registration desk`)}