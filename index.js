
let num1 = 0
let num2 = 0
let sumAnswer = 0

let numEl1 = document.getElementById("num1-el")
let numEl2 = document.getElementById("num2-el")
let sumType = document.getElementById("sum-type")
let checkResult = document.getElementById("sum-answer");
let answerInput = document.getElementById("answer-input");
let answerCheck = document.getElementById("check-answer-paragraph");



function incrementNum1() {
    num1 += 1
    numEl1.textContent = num1;
    checkResult.textContent = "?";
}

function decrementNum1() {
    num1 -= 1
    numEl1.textContent = num1;
    checkResult.textContent = "?";
}

function incrementNum2() {
    num2 += 1
    numEl2.textContent = num2;
    checkResult.textContent = "?";
}

function decrementNum2() {
    num2 -= 1
    numEl2.textContent = num2;
    checkResult.textContent = "?";
}

function sumTypeAddition() {
    sumType.textContent = "+"
}

function sumTypeSubtract() {
    sumType.textContent = "-"
}

function subtract() {
    let result = num1 - num2;
    checkResult.textContent = result;
};

function add() {
    let result = num1 + num2;
    checkResult.textContent = result;
};


function doMath() {
    if (sumType.textContent == "+") {
        sumAnswer = num1 + num2;
        checkResult.textContent = sumAnswer;
    } else if (sumType.textContent == "-") {
        sumAnswer = num1 - num2;
        checkResult.textContent = sumAnswer;
    }
}

// function reset() {
//     numEl1.textContent = 0;
//     numEl2.textContent = 0;
//     checkResult.textContent = "?";
// }


function checkAnswer() {
    let output1 = answerInput.value;
    // answerCheck.textContent = output1;

    if (sumType.textContent == "+") {
        sumAnswer = num1 + num2;
    } else if (sumType.textContent == "-") {
        sumAnswer = num1 - num2;
    }

    let output2 = sumAnswer;


    if (output1 == output2) {
        answerCheck.textContent = "You're Right! 😃";
    } else {
        answerCheck.textContent = "Wrong Answer 😩 ..Try Again";

    }

}
// answerInput.value