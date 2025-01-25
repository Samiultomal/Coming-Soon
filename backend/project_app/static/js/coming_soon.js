const launchDate = new Date("2025-02-15T00:00:00").getTime();

const countdownTimer = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = launchDate - now;

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;
    } else {
        clearInterval(countdownTimer);
        document.querySelector(".content").innerHTML = `<h1>We're Live!</h1><p>Welcome to our website!</p>`;
    }
}, 1000);
