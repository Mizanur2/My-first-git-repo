// problem 1

function anaToVori(ana) {
    if (ana < 0) {
        return 'please input a valid number'
    }
    const vori = ana / 16;
    return vori;
}

const getVori = anaToVori(32);
// console.log(getVori)

// problem 2

function pandaCost(singara, samuca, jilapi) {
    if (singara < 0 || samuca < 0 || jilapi < 0) {
        return 'please input a valid number'
    }
    const singaraPrice = 7;
    const samucaPrice = 10;
    const jilapiPrice = 15;
    const allSingaraPrice = singara * singaraPrice;
    const allSamucaPrice = samuca * samucaPrice;
    const allJilapiPrice = jilapi * jilapiPrice;
    const totalCost = allJilapiPrice + allSamucaPrice + allSingaraPrice;
    return totalCost;
}

const total = pandaCost(1, -1, 1);
// console.log(total);


// problem 4

function picnicBudget(member) {
    const feeOfFirst100 = 5000;
    const feeOfSecond100 = 4000;
    const feeOfRemainingPeople = 3000;
    if (member < 0) {
        return 'please input a valid number';
    }
    else if (member <= 100) {
        const feeOfPicnic = member * feeOfFirst100;
        return feeOfPicnic;
    }
    else if (member <= 200) {
        const first100 = 100 * feeOfFirst100;
        const remaingPeople = member - 100;
        const second100People = remaingPeople * feeOfSecond100;
        const total = first100 + second100People;
        return total;
    }
    else {
        const first100 = 100 * feeOfFirst100;
        const second100People = 100 * feeOfSecond100;
        const remaingPeople = member - 200;
        const lastRemaingPeople = remaingPeople * feeOfRemainingPeople;
        const total = first100 + second100People + lastRemaingPeople;
        return total;
    }

}

// console.log(picnicBudget(-9))

// problem 4 

function oddFriend(friends) {
    for (var element of friends) {
        let nameLength = element.length;
        if (nameLength % 2 != 0) {
            return element;

        }
    }

    return 'not valid'
}

const namesOfMyFriend = ['jamald', 'kamasl', 'naslam', 'habsib', 'khabib'];
console.log(oddFriend(namesOfMyFriend));