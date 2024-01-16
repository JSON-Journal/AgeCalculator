const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultValueEl = document.getElementById("resultValue");
const resultValueEl2 = document.getElementById("resultValue2");
const resultValueEl3 = document.getElementById("resultValue3");
const futureDayNameEl = document.getElementById("futureDayName");

function showAge() {
  const birthdayValue = birthdayEl.value;
    if (birthdayValue === "") {
      alert("Please enter your birthday");
    } 
    else {
      const age = getAge(birthdayValue);
      if (age > 99) {
        alert("You are a liar");
      }
      else if (age === 0 || age > 0) {
        resultValueEl.innerHTML = `<span class="colored-age">${age}</span>`;
      } 
      else {
        alert("You aren't Born Yet");
      }
  }
}

function getAge(birthdayValue) { 
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();
  if (month < 0 ||(month === 0 && currentDate.getDate() < birthdayDate.getDate())){
    age--;
  }

  return age;
}

function calculateAgeResult2() {
  const birthdayValue = birthdayEl.value;
  const age = getAge(birthdayValue);
  const currentDate2 = new Date();
  const birthdayDate2 = new Date(birthdayValue);
  const month = currentDate2.getMonth() - birthdayDate2.getMonth();
  let spendMonth = month < 0 ? 12 + month : month;
  const day = currentDate2.getDate() - birthdayDate2.getDate();
  let spendDay = day < 0 ? new Date(currentDate2.getFullYear(), currentDate2.getMonth(), 0).getDate() + day : day;
  if (age === 0 || age > 0) {
    resultValueEl2.innerHTML = `${spendMonth} ${spendMonth > 1 ? "Months" : "Month"}  | ${spendDay} ${spendDay > 1 ? "Days" : "Day"}`;
  }
  return;
}

function calculateRemainingDays(){
  const birthdayValue = birthdayEl.value;

      if (birthdayValue) {
        const currentDate = new Date();
        const nextBirthday = new Date(birthdayValue);
        nextBirthday.setFullYear(currentDate.getFullYear());
        if (currentDate > nextBirthday) {
          nextBirthday.setFullYear(currentDate.getFullYear() + 1);
        }
        const timeDifference = nextBirthday - currentDate;
        const remainingDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const remainingMonths = Math.floor(remainingDays / 30);

        const dayOfWeek = nextBirthday.getDay();
        const weekdayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const weekdayName = weekdayNames[dayOfWeek];

        futureDayNameEl.innerHTML = `<p>${weekdayName}</p>`;
        const remainingDaysAfterMonths = remainingDays % 30;
        resultValueEl3.innerHTML=`<p>${remainingMonths} ${remainingMonths > 1 ? "Months" : "Month"} | ${remainingDaysAfterMonths} ${remainingDaysAfterMonths > 1 ? "Days" : "Day"}</p>`;

    }
}

window.onload = function () {
  showAge();
  calculateAgeResult2();
  calculateRemainingDays();
};

btnEl.addEventListener("click", function () {
  showAge();
  calculateAgeResult2();
  calculateRemainingDays();
});
