'use strict';
const currencyOneE1=document.getElementById('currency-one');
const amountOneE1=document.getElementById('amount-one');
const currencyTwoE2=document.getElementById('currency-two');
const amountTwoE2=document.getElementById('amount-two');

const calculate=function(){
 const currencyOne=currencyOneE1.value;
 const currencyTwo=currencyTwoE2.value;

 const url=`https://api.exchangerate-api.com/v4/latest/${currencyOne}`;
 fetch(url)
 .then((res) =>res.json())
 .then((data) =>{
     const rate=data.rates[currencyTwo];
     amountTwoE2.value=(amountOneE1.value*rate).toFixed(2);
 }); 
};



currencyOneE1.addEventListener('change',calculate);
amountOneE1.addEventListener('input',calculate);
currencyTwoE2.addEventListener('change',calculate);
amountTwoE2.addEventListener('input',calculate);

swap.addEventListener('click',()=>{
    const temp=currencyOneE1.value;
    currencyOneE1.value=currencyTwoE2.value;
    currencyTwoE2.value=temp;
    calculate();
});

calculate();