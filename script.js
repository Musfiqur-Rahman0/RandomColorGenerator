const body = document.querySelector("body");
const btn = document.querySelector(".btn");
const hexaCode = document.querySelector(".Hexa-code");

const generateRandomClr = () => {
  const random = Math.floor(Math.random() * 16777215);
  const colorCode =
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0);
  hexaCode.innerText = colorCode;
  body.style.backgroundColor = colorCode;
  btn.style.color = colorCode;
};

btn.onclick = generateRandomClr;
