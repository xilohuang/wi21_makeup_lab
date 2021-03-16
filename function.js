const label1 = 'what the user inputs';
const label2 = 'how long it take since you click the Start Timer!'
var count = 0;

class Mistake extends Error {
    constructor(message) {
        super(message);
        this.name = 'Mistake'
    }
}

function cal() {
    let option = document.getElementById('option').value;
    let input1 = document.getElementById('input1').value;
    let input2 = document.getElementById('input2').value;
    let ans = document.getElementById('result');
    try {
        if (isNaN(Number(input1)) || isNaN(Number(input2))) {
            throw new Mistake('must input number only');
        }

        if (option == 'add') {
            ans.innerHTML = Number(input1) + Number(input2);
        }
        else if (option == 'minus') {
            ans.innerHTML = Number(input1) - Number(input2);
        }
        else if (option == 'times') {
            ans.innerHTML = Number(input1) * Number(input2);
        }
        else {
            ans.innerHTML = Number(input1) / Number(input2);
        }
    } catch (err) {
        console.error(err.message);
    } finally {
        console.log('calculation done');
    }
}

function consolelog() {
    let value = document.getElementById('result').innerHTML;
    console.log(value);
}

function consoleerror() {
    console.error('error click');
}

function consoledir() {
    console.dir(document.body);
}

function consoledirxml() {
    console.dirxml(document);
}

function consolegroupstart() {
    console.group(label1);
    console.info(document.getElementById('input1').value);
    console.info(document.getElementById('input2').value);
}

function consolegroupend() {
    console.groupEnd(label1);
}

function consoletable() {
    console.table ([
        {
            option: 'add',
            meaning: "add two num"
        },
        {
            option: 'minus',
            meaning: "minus the first num from the second"
        },
        {
            option: 'times',
            meaning: "times two num"
        },
        {
            option: 'divde',
            meaning: "divde the first num by the second"
        }
    ])
}

function starttimer() {
    console.time(label2);
}

function stoptimer() {
    console.timeEnd(label2);
}

function consoletrace() {
    counting(10);
}

function counting(n) {
    if (n > 0) {
        count += 1;
        return counting(n-1);
    } else {
        console.trace();
        console.log(count);
        count = 0;
    }
    
}

function globalerror() {
    throw new Mistake('calculator have error');
}

window.onerror = function(err) {
    console.log("Error trigger!");
    console.error('Error has been caught here');
    return true;
}
