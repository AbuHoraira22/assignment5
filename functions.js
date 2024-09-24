// 1stcard//
const pocketBalance = document.getElementById("pocketbalance");
const noaFund = document.getElementById("noaFund");
const amountOne = document.getElementById("amountone");
const donateNow1 = document.getElementById("donateNow1");


donateNow1.addEventListener("click",function(){
    
    const amount = parseInt(amountOne.value);

    
    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid positive amount.");
        return;
    }

    
    const currentPocketBalance = parseInt(pocketBalance.innerText);
    if (amount > currentPocketBalance) {
        alert("Sorry,You don't have sufficient money");
        return;
    }

    
    const newPocketBalance = currentPocketBalance - amount;
    const newNoaFund = parseInt(noaFund.innerText) + amount;

  
    pocketBalance.innerText = newPocketBalance;
    noaFund.innerText = newNoaFund;

   
    amountOne.value = "";
});

// 2nd card//

const fenifund = document.getElementById("fenifund");
const amount2 = document.getElementById("amount2");
const donatetwo = document.getElementById("donatetwo");


donatetwo.addEventListener("click",function(){
    
    const amount = parseInt(amount2.value);

    
    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid positive amount.");
        return;
    }

    
    const currentPocketBalance = parseInt(pocketBalance.innerText);
    if (amount > currentPocketBalance) {
        alert("Sorry,You don't have sufficient money");
        return;
    }

    
    const newPocketBalance = currentPocketBalance - amount;
    const newfeniFund = parseInt(fenifund.innerText) + amount;

  
    pocketBalance.innerText = newPocketBalance;
    fenifund.innerText = newfeniFund;

   
    amount2.value = "";
});

// 3rd card//

const quotaFund = document.getElementById("quotafund");
const amount3 = document.getElementById("amount3");
const donatethree = document.getElementById("donatethree");


donatethree.addEventListener("click",function(){
    
    const amount = parseInt(amount3.value);

    
    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid positive amount.");
        return;
    }
    else{
        
    }

    
    const currentPocketBalance = parseInt(pocketBalance.innerText);
    if (amount > currentPocketBalance) {
        alert("Sorry,You don't have sufficient money");
        
        return;
    }

    
    const newPocketBalance = currentPocketBalance - amount;
    const newquotaFund = parseInt(quotaFund.innerText) + amount;

  
    pocketBalance.innerText = newPocketBalance;
    quotaFund.innerText = newquotaFund;

   
    amount3.value = "";
});

// history button's hide ability//
const historybtn = document.getElementById("history");
const donationbtn = document.getElementById("donation");
const cards = document.getElementById("cards");
const historyone = document.getElementById("historyone")



historybtn.addEventListener("click",function(){

   cards.classList.add("hidden");
   historyone.classList.remove("hidden");

})

donationbtn.addEventListener("click",function(){

    historyone.classList.add("hidden");
    cards.classList.remove("hidden");

})
