const dropList = document.querySelectorAll(".drop-list select");

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

