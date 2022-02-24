//javascript object notation   JSON 
const user = { id: 13, name: 'amir khan', job: 'actor' };
const stringified = JSON.stringify(user);
console.log(user)
console.log(stringified)


const shop = {
    name: 'Mizan super shop',
    address: 'kali bari road',
    profit: 19000,
    owner: {
        name: 'mizanur rahman',
        profession: 'web developer'
    },
    product: ['mobile', 'laptop', 'tablet', 'smartwatch'],
    isExpensive: false
}

const shopStringified = JSON.stringify(shop);
// console.log(shop)
console.log(shopStringified)
const converted = JSON.parse(shopStringified);
console.log(converted);