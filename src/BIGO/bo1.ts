
// BIG O O(n) ---> Linear Time 
export const arrayNemod = new Array(100).fill('nemo');

export const findNemo = (array: string[]) => {
    array.forEach(element => {
        if (element === 'nemo') {
            console.log('found Nemo!');
        }
    });
}

export const bigOn = () => {
    findNemo(arrayNemod);
}

// BIG O O(1) constant time
const boxes = [3, 4, 6];

export const logOfTwoBoxes = (array: number[]) => {
    console.log(array[0]);
    console.log(array[1]);
}

export const bigO1 = () => {
    logOfTwoBoxes(boxes);
}

// BIG O challenge O(3 + 4n)
function funChallenge(input) {
    let a = 10; // O(1)
    a = 50 + 3; // O(1)

    for (let i = 0; i < input.length; i++) { // O(n)
        logOfTwoBoxes(boxes); // O(n)
        let stranger = true;  // O(n)
        a++; // O(n)
    }
    return a; // O(1)
}

export const bigO1a = () => {
    funChallenge(boxes);
}

// What is the Big O of the below function? (Hint, you may want to go line by line) O(4 + 7n)
function anotherFunChallenge(input) {
    let a = 5; // O(1)
    let b = 10; // O(1)
    let c = 50; // O(1)
    for (let i = 0; i < input; i++) { // 4 * O(n)
        let x = i + 1;
        let y = i + 2;
        let z = i + 3;

    }
    for (let j = 0; j < input; j++) { //  3* O(n)
        let p = j * 2;
        let q = j * 2;
    }
    let whoAmI = "I don't know"; // O(1)
}

export const bigO1b = () => {
    anotherFunChallenge(3);
}

// test 3  O(n) Drop the Constants
function printFirstItemThenFirstHalfThenSayHi100Times(items) {
    console.log(items[0]); // O(1)

    var middleIndex = Math.floor(items.length / 2); // O(1)
    var index = 0; // O(1)

    while (index < middleIndex) {    // O(n/2)
        console.log(items[index]);
        index++;
    }

    for (var i = 0; i < 100; i++) { // O(100)
        console.log('hi');
    }
}


//Log all pairs of array O(n^2)
const boxes44 = ['a', 'b', 'c', 'd', 'e'];
function logAllPairsOfArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
    //   console.log(array[i], array[j])
    }
  }
}

export const logAllPairsOfArray44 = () => {
    logAllPairsOfArray(boxes44)
}