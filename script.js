let sizeMultiplier = 1.5;
const maxSize = 300;

function handleNoClick() {
    const yesButton = document.querySelector(".yes-button");

    let currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    let newSize = currentSize * sizeMultiplier;

    if (newSize >= maxSize) {
        yesButton.style.position = "fixed";
        yesButton.style.width = "100vw";
        yesButton.style.height = "100vh";
        yesButton.style.fontSize = "50px";
    } else {
        yesButton.style.fontSize = `${newSize}px`;
    }
}

function handleYesClick() {
    document.body.innerHTML = `<div style="text-align: center; font-size: 30px; margin-top: 20%;">
        <h1>Yay! I Love You Too ❤️</h1>
        <img src="https://media.giphy.com/media/jR22gdcpiQ1iM/giphy.gif" width="300px">
    </div>`;
}