let display = document.getElementById("display");
let historyList = document.getElementById("historyList");

// Funkcija, lai pievienotu vērtības displejam
function appendValue(value) {
    display.value += value;
}

// Aprēķina funkcija
function calculate() {
    try {
        let result = eval(display.value);
        addHistory(display.value + " = " + result);
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}



// Funkcija, lai dzēstu displeju
function clearDisplay() {
    display.value = "";
}
function backDisplay() {
    const displayElement = document.getElementById("display");
    const currentValue = displayElement.value;
    displayElement.value = currentValue.slice(0, -1);
}

// Funkcija, lai pievienotu ierakstu vēsturei
function addHistory(entry) {
    let history = JSON.parse(localStorage.getItem("history")) || [];
    history.push(entry);
    localStorage.setItem("history", JSON.stringify(history));
    displayHistory();
}

// Funkcija, lai attēlotu vēsturi
function displayHistory() {
    historyList.innerHTML = "";  // Iztīra esošo saturu
    let history = JSON.parse(localStorage.getItem("history")) || [];

    history.forEach((entry, index) => {
        let historyItem = document.createElement("div");
        historyItem.className = "history-item";

        // Pievieno aprēķina tekstu
        let text = document.createElement("span");
        text.textContent = entry;

        // Pievieno individuālu dzēšanas pogu
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Dzēst";
        deleteButton.onclick = function() {
            deleteHistoryItem(index);
        };

        historyItem.appendChild(text);
        historyItem.appendChild(deleteButton);
        historyList.appendChild(historyItem);
    });
}

// Funkcija, lai dzēstu atsevišķu vēstures ierakstu
function deleteHistoryItem(index) {
    let history = JSON.parse(localStorage.getItem("history")) || [];
    history.splice(index, 1);  // Dzēš konkrēto ierakstu
    localStorage.setItem("history", JSON.stringify(history));
    displayHistory();  // Atjauno vēstures attēlojumu
}

// Funkcija, lai dzēstu visu vēsturi
function clearAllHistory() {
    localStorage.removeItem("history");
    displayHistory();
}

// Ielādē vēsturi, kad lapa tiek ielādēta
window.onload = displayHistory;

function keyboardInput(key) {
    if ((key.which < 0 || key.which > 57) && (key.which !== 13 && key.which !== 99)) {
        return false;
    } else {
        key.preventDefault();
        if (key.which === 48) {
            display.value += "0";
        } else if (key.which === 49) {
            display.value += "1";
        } else if (key.which === 50) {
            display.value += "2";
        } else if (key.which === 51) {
            display.value += "3";
        } else if (key.which === 52) {
            display.value += "4";
        } else if (key.which === 53) {
            display.value += "5";
        } else if (key.which === 54) {
            display.value += "6";
        } else if (key.which === 55) {
            display.value += "7";
        } else if (key.which === 56) {
            display.value += "8";
        } else if (key.which === 57) {
            display.value += "9";
        } else if (key.which === 46) {
            display.value += ".";
        } else if (key.which === 40) {
            display.value += "(";
        } else if (key.which === 41) {
            display.value += ")";
        } else if (key.which === 42) {
            display.value += "*";
        } else if (key.which === 47) {
            display.value += "/";
        } else if (key.which === 43) {
            display.value += "+";
        } else if (key.which === 45) {
            display.value += "-";
        } else if (key.which === 13) {
            calculate();
        } else if (key.which === 99) {
            clearDisplay();
        } else if (key.which == 8) {
            backDisplay();
        } else {
            display.value = display.value;
        }
        return true;
    }
}


window.onload = function () {
    // -- function calling and stuff:
    // for blocking alphabets into input field and helping calculation through keyboard keys
    document.onkeypress = keyboardInput;
    
    // for deleting value using backspace
    

    // for data(numberic values) input
    for (i = 0; i < inputs.length; i++) {
        inputs[i].onclick = dataInput;
    }

    // for operator(+-*/) input
    for (io = 0; io < operators.length; io++) {
        operators[io].onclick = operatorInput;
    }

    // for displaying the calculated result
    equal.onclick = displayResult;

    // for deleting(backspace) single value
   

    // for clearing input field
    clear.onclick = clearAll;
};