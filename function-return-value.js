function hazardWarningCreator(typeOfWarning) {
    let warningCounter = 0;
    return function(location) {
        increment = 1;
        warningCounter += increment;
        let numberofTimes = '';
        let amount = warningCounter;
        if (amount === 1) {
            numberOfTimes = 'time';
        } else if (amount >= 2 || amount === 0) {
            numberOfTimes = 'times';
        }
        console.log(`"DANGER! There is a ${typeOfWarning} hazard at ${location}!"`)
        console.log(`"The ${typeOfWarning} hazard alert has triggered ${warningCounter} ${numberOfTimes} today!"`)
    }
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const waterWarning = hazardWarningCreator('High Water');
const fireWarning = hazardWarningCreator('Fire');

rocksWarning('Main St and Pacific Ave');
waterWarning('Boardwalk Lane and Palisades Ave');
fireWarning('Battle Road and Little Rock Trail');
rocksWarning('Main St and Pacific Ave');