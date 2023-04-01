const hourE1 = document.getElementById("Hour");
const MinuteE1 = document.getElementById("Minute");
const SecondE1 = document.getElementById("second");
const ampmE1 = document.getElementById("ampm");
function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "Am";

    if (h > 12) {
        h = h - 12;
        ampm = "PM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourE1.innerText = h;
    MinuteE1.innerText = m;
    SecondE1.innerText = s;
    ampmE1.innerText = ampm;

    setTimeout(() => {
        updateClock();
        console.log("Ticking");
    }, 1000)
}

updateClock();
