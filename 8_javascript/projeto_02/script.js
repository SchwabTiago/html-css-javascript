const textInput = document.querySelector('#text');
const submitBtn = document.querySelector('#inputsubmit');
const qrCodeImg = document.querySelector('#qrcode');

function updateQRCode(text) {
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;
    qrCodeImg.src = qrCodeUrl;
}

submitBtn.addEventListener("click", () => {
    const userInput = textInput.value.trim();

    if (userInput === "") {
        alert("Por favor, insira um texto para gerar o QR Code.");
        return;
    }

    updateQRCode(userInput);
});