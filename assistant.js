function scanOrders() {
    let target = parseInt(document.getElementById("targetAmount").value);

    let elements = document.querySelectorAll("*");

    elements.forEach(el => {
        if (!el.innerText) return;

        let match = el.innerText.match(/^₹\s?\d+/);
        if (!match) return;

        let price = parseInt(match[0].replace("₹", "").trim());

        if (el.innerText.length > 10) return;

        let card = el.closest("div");
        if (!card) return;

        card.style.border = "";
        card.style.background = "";

        if (price === target) {
            card.style.border = "2px solid blue";
            card.style.background = "#e6f0ff";

            console.log("🎯 Found:", price);

            let sound = new Audio("https://www.soundjay.com/buttons/beep-01a.mp3");
            sound.play();
        }
    });
}
