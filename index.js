
let num1 = 0
let num2 = 0
let sumAnswer = 0

let numEl1 = document.getElementById("num1-el")
let numEl2 = document.getElementById("num2-el")
let sumType = document.getElementById("sum-type")
let checkResult = document.getElementById("sum-answer");
let answerInput = document.getElementById("answer-input");
let answerCheck = document.getElementById("check-answer-paragraph");
let answerEmoji = document.getElementById("check-answer-emoji");



function incrementNum1() {
    num1 += 1
    numEl1.textContent = num1;
    checkResult.textContent = "?";
    answerCheck.textContent = "";
    answerEmoji.textContent = "";
    clearInput();

}

function decrementNum1() {
    num1 -= 1
    numEl1.textContent = num1;
    checkResult.textContent = "?";
    answerCheck.textContent = "";
    answerEmoji.textContent = "";
    clearInput();
}

function incrementNum2() {
    num2 += 1
    numEl2.textContent = num2;
    checkResult.textContent = "?";
    answerCheck.textContent = "";
    answerEmoji.textContent = "";
    clearInput();
}

function decrementNum2() {
    num2 -= 1
    numEl2.textContent = num2;
    checkResult.textContent = "?";
    answerCheck.textContent = "";
    answerEmoji.textContent = "";
    clearInput();
}

function sumTypeAddition() {
    sumType.textContent = "+"
    answerCheck.textContent = "";
    answerEmoji.textContent = "";
    clearInput();
}

function sumTypeSubtract() {
    sumType.textContent = "-"
    answerCheck.textContent = "";
    answerEmoji.textContent = "";
    clearInput();
}

function subtract() {
    let result = num1 - num2;
    checkResult.textContent = result;
    clearInput();
};

function add() {
    let result = num1 + num2;
    checkResult.textContent = result;
    clearInput();
};


function doMath() {
    if (sumType.textContent == "+") {
        sumAnswer = num1 + num2;
        checkResult.textContent = sumAnswer;
    } else if (sumType.textContent == "-") {
        sumAnswer = num1 - num2;
        checkResult.textContent = sumAnswer;
    }
    answerCheck.textContent = "";
    answerEmoji.textContent = "";
    clearInput();
}

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
        answerEmoji.textContent = "😃";
        answerCheck.textContent = "You're Right  " + num1 + sumType.textContent + num2 + "=" + sumAnswer;
        checkResult.textContent = sumAnswer;
    } else {
        answerEmoji.textContent = "😩";
        answerCheck.textContent = "Wrong Answer ..Keep Trying!";
        checkResult.textContent = "?";

    }
}


function clearInput() {
    var getValue = document.getElementById("answer-input");
    if (getValue.value != "") {
        getValue.value = "";
    }
}
