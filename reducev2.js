let string = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';

let initialValue = '';

function reducer(string) {
    let inputs = string.split(' ');
    let newInputs = inputs.reduce(function(result, input) {
        if (input.length === 3) {
            result += ' ';
        } else {
            result += input[input.length-1].toUpperCase();
        } return result;
    }, initialValue);
  return newInputs;
}

console.log(reducer(string));