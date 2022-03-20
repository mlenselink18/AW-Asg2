"use strict";

const $ = selector => document.querySelector(selector);

const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};

const processEntries = () => {
    const subtotal = parseFloat($("#subtotal").value);
    const taxRate = parseFloat($("#taxRate").value);

    if(isNaN(subtotal))
    {
        alert("Subtotal must be a valid number");
        focusAndSelect("#subtotal");
    }
    else if(isNaN(taxRate))
    {
        alert("Tax rate must be a valid number");
        focusAndSelect("#taxRate");
    }
    else if(subtotal >= 10000 || subtotal <= 0)
    {
        alert("Subtotal must be between 0 and 10,000");
        focusAndSelect("#subtotal");
    }
    else if(taxRate <= 0 || taxRate >= 100)
    {
        alert("Tax rate must be between 0 and 100");
        focusAndSelect("#taxRate");
    }
    else
    {
        let convertedTax = taxRate/100;
        let tax = subtotal * convertedTax;
        let total = tax + subtotal;    
        $("#salesTax").value = tax.toFixed(2);
        $("#total").value = total.toFixed(2);
    }
}

const clearEntries = () =>{
    $("#subtotal").value = "";
    $("#taxRate").value = "";
    $("#salesTax").value = "";
    $("#total").value = "";
};


document.addEventListener("DOMContentLoaded", () => {
    $("#buttonSubmit").addEventListener("click", processEntries);
    $("#buttonClear").addEventListener("click", clearEntries);
});