const dropList = document.querySelectorAll(".drop-list select"),
fromCurrency = document.querySelector(".from select"),
toCurrency = document.querySelector(".to select"),
getButton = document.querySelector("form button");


for (let i  = 0; i < dropList.length; i++) {
    for(currencyCode in countryCode) {
        // Making the default conversion to be USD to ZAR
        let selected;
        if(i == 0) {
            selected = currencyCode == "USD" ? "selected" : "";
        } else if  (i == 1) {
            selected = currencyCode == "ZAR" ? "selected" : "";
        }
        // Creating option tag with passing currency code as a text and value
        let optionTag = `<option value="${currencyCode}" ${selected}>${currencyCode}</option>`;
        // Inserting options tag inside select tag
        dropList[i].insertAdjacentHTML("beforeend", optionTag);
    }
}

getButton.addEventListener("click", e => {
    e.preventDefault(); // Preventing the form from submitting
    getExchangeRate();
});

function getExchangeRate() {
    const amount = document.querySelector(".amount input");
    let amountVal = amount.value;
    // if the user doesn't enter any value or enter 0, we will have 1 by default
    if (amountVal == "" || amountVal == "0") {
        amount.value = "1";
        amountVal = 1;
    }
    let url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency.value}`;
    fetch(url).then(response => console.log(response.json()))
}
