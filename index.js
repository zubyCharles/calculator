"use strict";

//Array of the Images
const images = [
  "https://i.ibb.co/GPGwHVJ/blob.jpg",
  "https://i.ibb.co/f24VsF9/cert.jpg",
  "https://i.ibb.co/RyhBn24/glass.jpg",
  "https://i.ibb.co/601D73w/svg.jpg",
  "https://i.ibb.co/zsLk2Wm/system.jpg",
];

//Array of image descriptions
const descriptions = [
  "An svg blob",
  "A certificate",
  "Glassmorphism effect",
  "SVG waves",
  "A laptop",
];

const updateIndex = { index: 0 };

//Get the image elememnt
const currentImage = document.querySelector("#image");
currentImage.src = images[updateIndex.index];

//Image scroll function
function updateImage() {
  currentImage.src = images[updateIndex.index];
}
//Get the image description text
const imageText = document.querySelector("#text");
imageText.value = descriptions[updateIndex.index];

//Description text changing function
function updateText() {
  imageText.value = descriptions[updateIndex.index];
}

//Get the next button
const nextButton = document.querySelector("#next");
//click function handler for next button
nextButton.addEventListener("click", function () {
  updateIndex.index++;
  if (updateIndex.index > images.length - 1) {
    updateIndex.index = 0;
    //return;
  }
  updateImage();
  updateText();
});

//Get the previous button
const previousButton = document.querySelector("#previous");
//click function handler for previous button
previousButton.addEventListener("click", function () {
  updateIndex.index--;
  if (updateIndex.index < 0) {
    updateIndex.index = images.length - 1;
    //return;
  }
  updateImage();
  updateText();
});
