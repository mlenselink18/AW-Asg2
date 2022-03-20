"use strict";

const $ = selector => document.querySelector(selector);

const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};

const processEntries = () => {
    const input = parseFloat($("#dollarInput").value);

    if(isNaN(input))
    {
        alert("Input must be a valid number");
        focusAndSelect("#dollarInput");
    }
    else if(input >= 100 || input <= 0)
    {
        alert("Input must be between greater than 0 and less than 100");
        focusAndSelect("#dollarInput");
    }
    else
    {    
        makeChange();
    }
};

const makeChange = () => {


    let quarters = 0;
    let dimes = 0;
    let nickels = 0;
    let pennies = 0;
    let remainder = parseFloat($("#dollarInput").value);

    quarters = Math.floor(remainder/25);
    remainder = remainder%25;

    dimes = Math.floor(remainder/10);
    remainder = remainder%10;

    nickels = Math.floor(remainder/5);
    remainder = remainder%5;
    
    pennies = remainder;

    $("#quarters").value = quarters;
    $("#dimes").value = dimes;
    $("#nickels").value = nickels;
    $("#pennies").value = pennies;
};


document.addEventListener("DOMContentLoaded", () => {
 $("#buttonCalculate").addEventListener("click", processEntries);
});