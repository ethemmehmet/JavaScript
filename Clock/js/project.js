let userName = prompt("Lütfen isminizi giriniz");
let setName = document.querySelector("#myName");
setName.innerHTML = userName;

function changeClock() {
  var date = new Date();
  var dayNames = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];
  var day = dayNames[date.getDay()];
  var time = date.toTimeString().slice(0, 8);

  document.querySelector("#myClock").innerText = time + " " + day;
}

changeClock();
setInterval(changeClock, 1000);
