let colorName = document.querySelector(".colorName");
let colorType = document.querySelector(".colorType");
let colorCode = document.querySelector(".colorCode");
let save = document.querySelector(".save");
let gallery = document.querySelector(".gallery");

let newArrName = [];
let newArrValue = [];

getName();

if (newArrName.length > 0) {
  getSite();

  function getSite() {
    let arr = document.cookie.split(";");

    arr.forEach((elem) => {
      if (!elem) return;
      let i = elem.split("=")[0];
      let y = elem.split("=")[1];

      let yy = decodeURIComponent(y);

      let div = document.createElement("div");
      div.classList.add("colorBlock");

      let divText = document.createElement("div");
      divText.classList.add("colorText");

      let text = document.createElement("h3");
      text.innerText = `${i}`;

      let textCode = document.createElement("h3");

      if (yy.includes("#")) {
        textCode.innerText = `HEX`;
        div.style = `background-color: ${yy};`;
      }

      if (yy.split(",").length == 4) {
        textCode.innerText = `RGBA`;
        div.style = `background-color: rgba(${yy.split(",")});`;
      }

      if (yy.split(",").length == 3) {
        textCode.innerText = `RGB`;
        div.style = `background-color: rgb(${yy.split(",").join(" ")});`;
      }

      let textV = document.createElement("h3");
      textV.innerText = `${yy}`;

      divText.append(text);
      divText.append(textCode);
      divText.append(textV);
      div.append(divText);
      gallery.append(div);
    });
  }

  let div = document.createElement("div");
  div.classList.add("colorBlock");

  let divText = document.createElement("div");
  divText.classList.add("colorText");

  let text = document.createElement("h3");
  text.innerText = ``;
}

save.addEventListener("click", function (event) {
  event.preventDefault();

  let regexrS = /[\s]/gi.test(colorName.value);

  if (!colorName.value) {
    colorName.value = "";
    colorName.setAttribute("placeholder", "Не указанно имя");
    return;
  }

  if (regexrS) {
    colorName.value = "";
    colorName.setAttribute("placeholder", "Укажите имя без пробелов");
    return;
  }

  let regexrN = /[0-9]/gi.test(colorName.value);

  if (regexrN) {
    colorName.value = "";
    colorName.setAttribute("placeholder", "Укажите имя без цифр");
    return;
  }

  getName();

  if (newArrName.includes(colorName.value)) {
    colorName.value = "";
    colorName.setAttribute("placeholder", "Такое имя уже есть");
    return;
  }

  if (colorType.value == "RGB") {
    let arrRgb = colorCode.value.split(",");
    arrRgb.forEach((elem) => {
      if (arrRgb.length != 3) {
        colorCode.value = "";
        colorCode.setAttribute("placeholder", "Укажите код из трех цифр");
        return;
      }
      if (!+elem && 0) {
        colorCode.value = "";
        colorCode.setAttribute("placeholder", "Код состоит из цифр а не строк");
        return;
      }
      if (elem < 0 || 255 < elem) {
        colorCode.value = "";
        colorCode.setAttribute(
          "placeholder",
          "Укажите цифры в диапазоне 0-255"
        );
        return;
      }
    });

    let div = document.createElement("div");
    div.classList.add("colorBlock");

    div.style = `background-color: rgb(${colorCode.value});`;

    let divText = document.createElement("div");
    divText.classList.add("colorText");

    let text = document.createElement("h3");
    text.innerText = `${colorName.value}`;

    let textType = document.createElement("h3");
    textType.innerText = `${colorType.value}`;

    let textV = document.createElement("h3");
    textV.innerText = `${colorCode.value}`;

    divText.append(text);
    divText.append(textType);
    divText.append(textV);
    div.append(divText);
    gallery.append(div);
  }

  if (colorType.value == "RGBA") {
    let arrRgba = colorCode.value.split(",");

    arrRgba.forEach((elem) => {
      if (arrRgba.length != 4) {
        colorCode.value = "";
        colorCode.setAttribute("placeholder", "Укажите код из четырех цифр");
        return;
      }

      if (!+elem && 0) {
        colorCode.value = "";
        colorCode.setAttribute("placeholder", "Код состоит из цифр а не строк");
        return;
      }

      if (elem < 0 || 255 < elem) {
        colorCode.value = "";
        colorCode.setAttribute(
          "placeholder",
          "Укажите первые 3 цифры в диапазоне 0-255"
        );
        return;
      }

      if (arrRgba[3] == elem) {
        if (elem < 0 || 1 < elem) {
          colorCode.value = "";
          colorCode.setAttribute(
            "placeholder",
            "Укажите 4-ю цифру в диапазоне 0-1"
          );
          return;
        }
      }
    });

    let div = document.createElement("div");
    div.classList.add("colorBlock");

    div.style = `background-color: rgba(${colorCode.value});`;

    let divText = document.createElement("div");
    divText.classList.add("colorText");

    let text = document.createElement("h3");
    text.innerText = `${colorName.value}`;

    let textType = document.createElement("h3");
    textType.innerText = `${colorType.value}`;

    let textV = document.createElement("h3");
    textV.innerText = `${colorCode.value}`;

    divText.append(text);
    divText.append(textType);
    divText.append(textV);
    div.append(divText);
    gallery.append(div);
    
  }

  if (colorType.value == "HEX") {
    let arrHex = colorCode.value.split("");

    console.log(arrHex.length);
    arrHex.forEach((elem) => {
      if (arrHex.length != 7) {
        colorCode.value = "";
        colorCode.setAttribute(
          "placeholder",
          "символ # и 6 цифр или букв от A до F"
        );
        return;
      }

      let regexpHex = /#[a-f0-9]{6}\b/gi;

      if (!regexpHex.test(colorCode.value)) {
        colorCode.value = "";
        colorCode.setAttribute(
          "placeholder",
          "символ # и 6 цифр или букв от A до F"
        );
        return;
      }
    });
    let div = document.createElement("div");
    div.classList.add("colorBlock");

    console.log(`background-color: ${colorCode.value};`);
    div.style = `background-color: ${colorCode.value};`;

    let divText = document.createElement("div");
    divText.classList.add("colorText");

    let text = document.createElement("h3");
    text.innerText = `${colorName.value}`;

    let textType = document.createElement("h3");
    textType.innerText = `${colorType.value}`;

    let textV = document.createElement("h3");
    textV.innerText = `${colorCode.value}`;

    divText.append(text);
    divText.append(textType);
    divText.append(textV);
    div.append(divText);
    gallery.append(div);
  }
  
  setCookie(colorName.value, colorCode.value, {
    secure: true,
    "max-age": 10800,
  });

  colorName.value = "";
  colorCode.value = "";
});

function setCookie(name, value, options = {}) {
  options = {
    path: "/",
    ...options,
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie =
    encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
}

function getName() {
  let arr = document.cookie.split(";");
  newArrName = [];
  newArrValue = [];

  arr.forEach((elem) => {
    if (!elem) return;
    let i = elem.split("=")[0];
    let y = elem.split("=")[1];
    newArrName.push(i.trim());
    newArrValue.push(y.trim());
  });
}
