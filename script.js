const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

noButton.addEventListener("mouseenter", () => {

    const maxX = window.innerWidth - noButton.offsetWidth;
    const maxY = window.innerHeight - noButton.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noButton.style.position = "fixed";
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

});

yesButton.addEventListener("click", () => {

    confetti({

        particleCount: 180,
        spread: 100,
        origin: { y: 0.6 }

    });

    setTimeout(() => {

        window.location.href = "cita.html";

    }, 1200);

});