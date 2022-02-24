document.getElementById('deposit-button').addEventListener('click', function () {
    let depositInput = document.getElementById('deposit-input');
    let depositAmount = parseFloat(depositInput.value);

    const depositTotal = document.getElementById('total-deposit-amount');
    const depositTotalAmount = parseFloat(depositTotal.innerText);
    depositTotal.innerText = depositAmount + depositTotalAmount;

    let totalBalance = document.getElementById('total-balance-amount');
    let totalBalanceAmount = parseFloat(totalBalance.innerText);


    let updateTotalBalance = totalBalanceAmount + depositAmount;
    totalBalance.innerText = updateTotalBalance;

    depositInput.value = '';

})


document.getElementById('withdraw-button').addEventListener('click', function () {

    let withdrawInput = document.getElementById('withdraw-input');
    let withdrawAmount = parseFloat(withdrawInput.value);

    const withdrawTotal = document.getElementById('total-withdraw-amount');
    const withdrawTotalAmount = parseFloat(withdrawTotal.innerText);
    withdrawTotal.innerText = withdrawAmount + withdrawTotalAmount;


    let totalBalance = document.getElementById('total-balance-amount');
    let totalBalanceAmount = parseFloat(totalBalance.innerText);


    let updateTotalBalance = totalBalanceAmount - withdrawAmount;
    totalBalance.innerText = updateTotalBalance;

    withdrawInput.value = '';

    // update total balance 


})