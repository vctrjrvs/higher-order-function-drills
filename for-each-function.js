let turtleMovements = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];
let flattenedMovements = turtleMovements.flat(2)


let forwardMovement = flattenedMovements.filter(num => {
    return num >= 0;
});
console.log(forwardMovement);

let totalMovement = turtleMovements.map(function(value) { 
    let totalValue = value.reduce(function(a, b) {
        return a + b;
    });
    
    return totalValue
});
console.log(totalMovement);

turtleMovements.forEach((value, index) => {
    let totalValue = value.reduce(function(a, b) {
        return a + b;
    });
    console.log('Movement #' + (index + 1) + ' : ' + totalValue + ' steps.')
});