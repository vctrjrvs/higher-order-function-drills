/* 
Use the reduce function to iterate through an array of words and 
construct a decoded sentence (string)

reduce
arr.reduce(callback, initialValue);

this is our initial value i.e. the starting point
const initialValue = 0; DONE

numbers array
const numbers = [5, 10, 15]; DONE

reducer method that takes in the accumulator and next item
const reducer = (accumulator, item) => {
  return accumulator + item;
};

we give the reduce method our reducer function
and our initial value
const total = numbers.reduce(reducer, initialValue)

result.concat(str2 [, ...strN])

*/

let input = ['noggin', 
    'oreo', 
    'the', 
    'moon', 
    'time', 
    'tele', 
    'steed', 
    'his', 
    'tent', 
    'apollo', 
    'her', 
    'lives', 
    'though', 
    'shoo', 
    'tofu', 
    'budapest'];

let initialValue = ''; 

let result = input.reduce(reducer(accumulator, input[i]) {
    return accumulator + input[i];
    }, initialValue); 
}

//const result = input.reduce((acc, input[i]) => acc + input[i], initialValue);

if (array.element.length === 2) {
    // add a space
} else .toUppercase(/*the LAST character*/) // and add it to your accumulator

function reducer(accumulator, item) => {
    return accumulator = item;
}

