const qrCodeContainer = document.getElementById("qrcode");

new QRCode(qrCodeContainer, {
  text: "https://www.frontendmentor.io/",
  width: 100,
  height: 100,
  colorDark: "#2c49ff",
  colorLight: "#ffffff",
  correctLevel: QRCode.CorrectLevel.H
});
