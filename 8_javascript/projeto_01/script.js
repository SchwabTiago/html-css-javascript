const multiplicationForm = document.querySelector("#multiplication-form")
const numberInput = document.querySelector("#number")
const multiplicationInput = document.querySelector("#multiplicator")
const jsToHtml = document.querySelector("#jsToHtml");

function createTable(number, multiplicatorNumber) {
    jsToHtml.innerHTML = "";

    for (let i = 1; i <= multiplicatorNumber; i++) {
        const result = number * i;
        const operationDiv = document.createElement("div");
        operationDiv.textContent = `${number} x ${i} = ${result}`;
        jsToHtml.appendChild(operationDiv);
    }
}

multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const multiplicationNumber = +numberInput.value;
    const multiplicatorNumber = +multiplicationInput.value;

    if (isNaN(multiplicationNumber) || isNaN(multiplicatorNumber)) return;

    createTable(multiplicationNumber, multiplicatorNumber);
});
