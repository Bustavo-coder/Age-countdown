const birtday = document.querySelector(".birthday")
const birthMonth = document.querySelector(".birthmonth")
const birthYear = document.querySelector(".birthyear")
const age = document.querySelector(".years")
const monthTillBirthday = document.querySelector(".month")
const daysTillBirthday = document.querySelector(".days")
const btn = document.querySelector(".btn")

age.textContent = 0
monthTillBirthday.textContent = 0
daysTillBirthday.textContent = 0

const currentYear = new Date().getFullYear()
const currentmonth = new Date().getMonth() + 1
const days = new Date().getUTCDate() 
console.log(days);

function calYears() {
    if (birthYear.value <= currentYear) {
        const calage = currentYear - birthYear.value;
        age.textContent = calage;
    } else {
        alert("Your Birth Year Is Greater Than The Current Year")
    }
}

function calMonth() {
    const calMonth = Math.abs(currentmonth - birthMonth.value);
    monthTillBirthday.textContent = calMonth
}

function caldays() {
    const dayscal = 31 - days
    daysTillBirthday.textContent = dayscal
    return dayscal
}

btn.addEventListener("click", function () {
    if (birtday.value > 0 && birthMonth.value > 0 && birthYear.value > 0) {
        calYears();
        calMonth();
        caldays();
    } else {
        alert("Invalid Date And Number")
    }
    
})