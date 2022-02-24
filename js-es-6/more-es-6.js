let age = 13;
const myName = 'Mizanur Rahman';

const myInfo = {
    name: 'mizanur rahman',
    age: 13,
    height: 5.5,
    address: 'bhola sadar'
}

const myBio = `hi this is ${myName}.
            my age is ${age}.
            my dreams is becoming an web developer. i live in ${myInfo.address}. my height is ${myInfo.height}`

// console.log(myBio)

const dividing = (num) => num / 5;
// console.log(dividing(56))

const twoDimension = (num1, num2) => {
    const first = num1 + 2;
    const second = num2 + 2;
    const multiply = first * second;
    return multiply;
}

// console.log(twoDimension(31, 67));
const threeNum = (first, second, third) => first * second * third;
console.log(threeNum(2, 3, 9))