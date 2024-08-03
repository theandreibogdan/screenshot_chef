var image_to_display = document.getElementById("image");
var uploaded_image = document.getElementById("file");
var bg = document.getElementById("photo-bg");

var paddingSlider = document.getElementById("paddingSlider");
var borderRadiusSlider = document.getElementById("borderRadiusSlider");
var scaleSlider = document.getElementById("scaleSlider");
var shadowBlurSlider = document.getElementById("shadowBlurSlider");
var shadowSizeSlider = document.getElementById("shadowSizeSlider");
var widthSlider = document.getElementById("widthSlider");
var heightSizeSlider = document.getElementById("heightSizeSlider");

paddingSlider.oninput = function () {
  bg.style.padding = String(paddingSlider.value) + "px";
};

borderRadiusSlider.oninput = function () {
  image_to_display.style.borderRadius = String(borderRadiusSlider.value) + "px";
};

scaleSlider.oninput = function () {
  image_to_display.style.width = String(scaleSlider.value) + "%";
};

shadowBlurSlider.oninput = function () {
  image_to_display.style.boxShadow =
    "0px 0px " +
    String(shadowBlurSlider.value) +
    "px " +
    String(shadowSizeSlider.value) +
    "px rgba(0, 0, 0, 1)";
};

shadowSizeSlider.oninput = function () {
  image_to_display.style.boxShadow =
    "0px 0px " +
    String(shadowBlurSlider.value) +
    "px " +
    String(shadowSizeSlider.value) +
    "px rgba(0, 0, 0, 1)";
};

widthSlider.oninput = function () {
  bg.style.width = String(widthSlider.value) + "px";
};

heightSizeSlider.oninput = function () {
  bg.style.height = String(heightSizeSlider.value) + "px";
};

function download_image() {
  domtoimage.toBlob(document.getElementById("photo")).then(function (blob) {
    window.saveAs(blob, "image.png");
  });
}

function inputToURL(inputElement) {
  var file = inputElement.files[0];
  image_to_display.src = window.URL.createObjectURL(file);
}

function add_bg_1() {
  bg.removeAttribute("class");
  bg.classList.add("preview--background1");
}

function add_bg_2() {
  bg.removeAttribute("class");
  bg.classList.add("preview--background2");
}

function add_bg_3() {
  bg.removeAttribute("class");
  bg.classList.add("preview--background3");
}

function add_bg_4() {
  bg.removeAttribute("class");
  bg.classList.add("preview--background4");
}

function add_bg_5() {
  bg.removeAttribute("class");
  bg.classList.add("preview--background5");
}

function add_bg_6() {
  bg.removeAttribute("class");
  bg.classList.add("preview--background6");
}

function add_bg_7() {
  bg.removeAttribute("class");
  bg.classList.add("preview--background7");
}

function add_bg_8() {
  bg.removeAttribute("class");
  bg.classList.add("preview--background8");
}

function add_bg_9() {
  bg.removeAttribute("class");
  bg.classList.add("preview--background9");
}

function add_bg_10() {
  bg.removeAttribute("class");
  bg.classList.add("preview--background10");
}

function add_bg_11() {
  bg.removeAttribute("class");
  bg.classList.add("preview--background11");
}
