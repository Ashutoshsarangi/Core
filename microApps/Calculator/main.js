function clickHandler(event) {
    let result = '';
    let btnPressed = event.target.id;
    let text = document.getElementById("calculator").value;
    switch (btnPressed) {
        case "=":
            result = calculate(text);
            break;
    }
    if (btnPressed === "R") {
        document.getElementById("calculator").value = "";
    } else if (btnPressed === "B") {
        // Add Logic For Back Space;
        document.getElementById("calculator").value = text.slice(0, -1);
    } else {
        document.getElementById("calculator").value = text + btnPressed + result;
    }
}

function calculate(text) {
    return "145";
}