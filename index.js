const cardNumber = document.getElementById("number");
const numberInp = document.getElementById("card-number");


const cardName = document.getElementById("name");
const nameInp = document.getElementById("card-name");

const cardMonth = document.getElementById("month");
const monthInp = document.getElementById("card-month");

const cardYear = document.getElementById("year");
const yearInp = document.getElementById("card-year");

const cardCvc = document.getElementById("cvc");
const cvcInp = document.getElementById("card-cvc");

const submitBtn = document.getElementById("submit-btn");

const completed = document.querySelector(".thank");
const form = document.querySelector("form");

const error = document.querySelector("#error-message")


function onInput(input) {
    const value = input.value
    const max = input.maxLength
    if(value.length > max) {
        input.value = value.slice(0, max)
    }
}

function setCardNumber(e) {

    if (e.target.value.length > 16) {
        return false
    }
    cardNumber.innerText = format(e.target.value);
}

function setCardName (e) {
    cardName.innerText = e.target.value;
}

function setCardMonth(e) {
    cardMonth.innerText = e.target.value;
}

function setCardYear(e) {
    cardYear.innerText = e.target.value;
}

function setCardCvc(e) {
    cardCvc.innerText = e.target.value;
}

function format (value) {
    const regex = /^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/g
    const onlyNumbers = value.replace(/[^\d]/g, '')
  
    return onlyNumbers.replace(regex, (regex, $1, $2, $3, $4) =>
      [$1, $2, $3, $4].filter(group => !!group).join(' ')
    )
}

function handleSubmit(e) {
    e.preventDefault();
    if (!nameInp.value) {
        nameInp.classList.add("error");
        nameInp.parentElement.classList.add("error-message");
    }else {
        nameInp.classList.remove("error");
        nameInp.parentElement.classList.remove("error-message");
    }
    if (!numberInp.value) {
        numberInp.classList.add("error");
        numberInp.parentElement.classList.add("error-message");
    }else {
        numberInp.classList.remove("error");
        numberInp.parentElement.classList.remove("error-message");
    }
    if (!monthInp.value) {
        monthInp.classList.add("error");
        monthInp.parentElement.classList.add("error-message");
    }else {
        monthInp.classList.remove("error");
        monthInp.parentElement.classList.remove("error-message");
    }
    if (!yearInp.value) {
        yearInp.classList.add("error");
        yearInp.parentElement.classList.add("error-message");
    }else {
        yearInp.classList.remove("error");
        yearInp.parentElement.classList.remove("error-message");
    }
    if (!cvcInp.value) {
        cvcInp.classList.add("error");
        cvcInp.parentElement.classList.add("error-message");
    }else {
        cvcInp.classList.remove("error");
        cvcInp.parentElement.classList.remove("error-message");
    }
    if(nameInp.value && numberInp.value && monthInp.value && yearInp.value && cvcInp.value) {
        completed.classList.remove("hidden");
        form.classList.add("hidden")
    }
}

numberInp.addEventListener("keyup",setCardNumber);
nameInp.addEventListener("keyup",setCardName);
monthInp.addEventListener("keyup",setCardMonth);
yearInp.addEventListener("keyup",setCardYear);
cvcInp.addEventListener("keyup",setCardCvc);
submitBtn.addEventListener("click",handleSubmit)