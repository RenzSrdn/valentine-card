const card = document.getElementById("card");
const confettiContainer = document.getElementById("confetti-container");

/* Flip Card */
card.addEventListener("click", () => {
    const wasFlipped = card.classList.contains("is-flipped");

    card.classList.toggle("is-flipped");

    /* Trigger confetti ONLY when opening */
    if (!wasFlipped) {
        launchHearts();
    }
});

/* Heart Confetti */
function launchHearts() {
    for (let i = 0; i < 35; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💗";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
        heart.style.fontSize = (Math.random() * 18 + 16) + "px";

        confettiContainer.appendChild(heart);

        setTimeout(() => heart.remove(), 5000);
    }
}

/* Generate QR Code */
const qrSize = Math.min(window.innerWidth * 0.28, 140);

new QRCode(document.getElementById("qrcode"), {
    text: "https://open.spotify.com/playlist/0PlVrLL8xPeXWcFpk61paH?si=5074bcd794a54636&pt=26751e39d7119467ed191f47fefdae95",
    width: qrSize,
    height: qrSize,
    colorDark: "#b03052",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
});