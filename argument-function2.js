
function filter(arr, fn) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        fn(arr);
        if (fn(arr[i]) === true) {
            newArray.push(arr[i])
        } 
    }
    return newArray;
}

const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];
const filteredNames = filter(myNames, function(name) {
    return name[0] === 'R';
});
console.log(filteredNames);
