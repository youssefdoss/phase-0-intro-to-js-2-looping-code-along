// Code your solutions in this file
function writeCards(names, event) {
    const newArr = [];
    for (let i = 0; i < names.length; i++) {
        newArr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return newArr;
}

function countDown(n) {
    while (n >= 0) {
        console.log(n);
        n--;
    }
}