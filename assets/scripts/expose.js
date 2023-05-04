// expose.js


window.addEventListener('DOMContentLoaded', init);


/* element.addEventListener(event, function);
    event: type of event
    function: what we want to call when event occurs
*/

function init() {

  const jsConfetti = new JSConfetti();

  // set correct images
  let selectElement = document.getElementById("horn-select");
  selectElement.addEventListener("change", displayImage);
  let hornImg = document.querySelector("img");
  var hornAudio = document.querySelector("audio"); // will be used again to set volume

  function displayImage() {

    var correctImg = "";
    var correctAudio = "";

    if (selectElement.value == "air-horn") {
      correctImg = "assets/images/air-horn.svg";
      correctAudio = "assets/audio/air-horn.mp3"
    } else if (selectElement.value == "car-horn") {
      correctImg = "assets/images/car-horn.svg";
      correctAudio = "assets/audio/car-horn.mp3"
    } else if (selectElement.value == "party-horn") {
      correctImg = "assets/images/party-horn.svg";
      correctAudio = "assets/audio/party-horn.mp3"
    }

    hornImg.src = correctImg;

    hornAudio.src = correctAudio;
  }

  // change volume depending on slider & set corresponding audio level
  var volumeElement = document.querySelector('input[type="range"]');
  volumeElement.addEventListener('input', displayVolume);

  var volumeImageElement = document.querySelector("div > img");

  function displayVolume() {
    var volumeLevel = volumeElement.value;
    if (volumeLevel == 0) {
      volumeImageElement.src = "assets/icons/volume-level-0.svg";
      hornAudio.volume = 0.0;
    } else if (volumeLevel >= 1 && volumeLevel < 33) {
      volumeImageElement.src = "assets/icons/volume-level-1.svg";
    } else if (volumeLevel >= 33 && volumeLevel < 67) {
      volumeImageElement.src = "assets/icons/volume-level-2.svg";
    } else {
      volumeImageElement.src = "assets/icons/volume-level-3.svg";
    }

    // // set to correct volume
    // if (volumeLevelValue == 1.0){
    //   volumeLevelValue = 1.0;
    // } else {
    //   // var volumeLevelValue = parseFloat("0." + volumeLevel);
    //   var volumeLevelValue = volumeLevel/100;
    // }

    hornAudio.volume = volumeLevel/100;

  }

  // Play Sound button
  var btn = document.querySelector("button");
  btn.addEventListener('click', playSound);

  function playSound() {
    hornAudio.play();

    //confetti
    if (selectElement.value == "party-horn") {

      jsConfetti.addConfetti()
    }

  }

}