let birthdayInput = document.querySelector("#birthday");
let numberInput = document.querySelector("#number");
let outputText = document.querySelector("#output");
let buttonInput = document.querySelector("#btn");

function checkIfNotEmpty() {
    if (birthdayInput.value !== "" && numberInput.value !== "") {
        buttonInput.disabled = false;
    }
    else {
        buttonInput.disabled = true;
    }
}

function getBdayAsNumber(birthday) {
    let bday = birthday.split("-");
    let bdayAsNumber = 0;
    let multiplier = 1;

    for (let i = 0; i < bday.length; i++) {
        let temp = bday[i].split("");
        for (let j = temp.length - 1; j >= 0; j--) {
            bdayAsNumber = bdayAsNumber + temp[j] * multiplier;
            multiplier = multiplier * 10;
        }
    }
    return bdayAsNumber;
}

function slowMeDown() {
    outputText.style.display = "block";
    outputText.innerText = "Loading !";
    outputText.style.backgroundImage = "";
    outputText.style.width = "auto";
    outputText.style.height = "auto";
    setTimeout(checkIfLucky, 2000);
}

function checkIfLucky() {
    let bdayAsNumber = getBdayAsNumber(birthdayInput.value);
    let luckyNumber = numberInput.value;
    if (bdayAsNumber % luckyNumber === 0) {
        outputText.innerText = "Your Birthday is a Lucky One !"
        outputText.style.backgroundImage = "url('https://thumbs.gfycat.com/BabyishAppropriateAnchovy-size_restricted.gif')";
        outputText.style.lineHeight = "150px";
        outputText.style.width = "500px";
        outputText.style.height = "226px";
    }
    else {
        outputText.innerText = "Your Birthday may not be special but you are !";
        outputText.style.backgroundImage = "url('https://i.pinimg.com/originals/0f/61/24/0f612496efa7ca7f5679ac72340e87d6.gif')";
        outputText.style.lineHeight = "70px";
        outputText.style.width = "355px";
        outputText.style.height = "200px";
    }

    outputText.style.display = "block";

}

buttonInput.disabled = true;
buttonInput.addEventListener("click", slowMeDown);
birthdayInput.addEventListener("change", checkIfNotEmpty);
numberInput.addEventListener("change", checkIfNotEmpty);

