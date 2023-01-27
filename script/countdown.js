//inspired by the countdown timer on w3schools

var countDownDate = new Date("Jan 31, 2023 12:00:00").getTime();
//var countDownDate = new Date("Jan 1, 2023 12:00:00").getTime();
const magic = document.getElementById("magic");

var x = setInterval(function () {
            var now = new Date().getTime();
            var distance = countDownDate - now;
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("countdown").innerHTML = days + "d " + hours + "h " +
                minutes + "m " + seconds + "s ";
    if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = `<img id="magic" src="images/ratman.png" alt="believe in the magic">`
    document.getElementById("almost").style.display = "none";
  }
    }, 1000);
