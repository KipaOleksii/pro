let expression = '';
let history = [];

function appendToExpression(value) {
    expression += value;
    document.getElementById('display').innerText = expression;
}

function calculateResult() {
    try {
        const result = eval(expression);
        const historyItem = `${expression} = ${result}`;
        history.unshift(historyItem);
        if (history.length > 10) {
            history.pop();
        }
        updateHistory();
        expression = result.toString();
        document.getElementById('display').innerText = expression;
    } catch (error) {
        document.getElementById('display').innerText = 'Error';
        expression = '';
    }
}

function clearExpression() {
    expression = '';
    document.getElementById('display').innerText = '0';
}

function updateHistory() {
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = '';
    history.forEach(item => {
        const li = document.createElement('li');
        li.innerText = item;
        li.onclick = () => {
            expression = item.split(' = ')[0];
            document.getElementById('display').innerText = expression;
        };
        historyList.appendChild(li);
    });
}

function clearHistory() {
    history = [];
    updateHistory();
}



// let input1 = document.getElementById("number1");
// let input2 = document.getElementById("number2");
// let operationButton = document.getElementsByClassName('operation-button');

// function makeOperation(operationCode) {
//   let Number1 = Number(input1.value);
//   let Number2 = Number(input2.value);
//   if (operationCode === "+") {
//     let result = Number1 + Number2;
//     window.alert(result);
//   } else if (operationCode === "-") {
//     let result = Number1 - Number2;
//     window.alert(result);
//   } else if (operationCode === "*") {
//     let result = Number1 * Number2;
//     window.alert(result);
//   } else if (operationCode === "/") {
//     let result = Number1 / Number2;
//     window.alert(result);
//   } else {
//     window.alert("Net takogo resultata");
//   }
// };

// function onOperationButtonClick(eventObj) {
//   let clickedEl = eventObj.currentTarget;
//   let operation = clickedEl.innerHTML;
//   makeOperation(operation);
// }


// for (let i = 0; i < operationButton.length; i++) {
//   let button = operationButton[i];
//   button.addEventListener("click", onOperationButtonClick);
// }

// function addErrorClass(elementId) {
//     let element = document.getElementById(elementId);
//     element.className = 'error-input';
// }
// function addErrorClassToAll() {
//     addErrorClass('first-name');
//     addErrorClass('adress');
//     addErrorClass('last-name');
// }
// let but = document.getElementById('but-class');
// but.addEventListener('click', addErrorClassToAll);

// let firstNameId = 'first-name';
// let adressId = 'adress';
// let lastNameId = 'last-name';

// function valueId (id) {
//     let anyEL = document.getElementById(id);
//     console.log(anyEL.value)
// }

// valueId(firstNameId);
// valueId(lastNameId);
// valueId(adressId);

// let firstNameId;
// let firstNameEl;
// firstNameId = 'first-name';
// firstNameEl = document.getElementById(firstNameId);
// //  window.alert(firstNameEl.value);
// // window.alert(firstNameEl.className);

// let lastNameId;
// let lastNameEl;
// lastNameId = 'last-name';
// lastNameEl = document.getElementById(lastNameId);
// //  window.alert(lastNameEl.value);
// // window.alert(lastNameEl.className);

// let adressId;
// let adressEl;
// adressId = 'adress';
// adressEl = document.getElementById(adressId);
// //  window.alert(adressEl.value);
// // window.alert(adressEl.className);

// let cityId;
// let cityEl;
// cityId = 'city';
// cityEl = document.getElementById(cityId);
// // window.alert(cityEl.value);

// let textAreaId;
// let textAreaEl;
// textAreaId = 'hobi';
// textAreaEl = document.getElementById(textAreaId);
// // window.alert(textAreaEl.value);

// let divAvaId;
// let divAvaEl;
// divAvaId = 'avatar';
// divAvaEl = document.getElementById(divAvaId);
// // window.alert(divAvaEl.innerHTML);

// function alertValue () {
//     console.log('1');
//     console.log('2');
//     console.log('3');
// }
// alertValue();
