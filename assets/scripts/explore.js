// explore.js

window.addEventListener('DOMContentLoaded', init);
function init() {


  // puts all the available voices into a list
  function loadVoices() {
  
    var voiceList = speechSynthesis.getVoices();
  
    for (let i = 0; i < voiceList.length; i++) {

      const option = document.createElement("option");
      option.textContent = `${voiceList[i].name} (${voiceList[i].lang})`;
  
      option.setAttribute("data-lang", voiceList[i].lang);
      option.setAttribute("data-name", voiceList[i].name);
      document.getElementById("voice-select").appendChild(option);
    }
  }
  
  //loadVoices();

  speechSynthesis.addEventListener('voiceschanged', loadVoices);

  //speechSynthesis.onvoiceschanged = loadVoices;

  // if (
  //   speechSynthesis.onvoiceschanged !== undefined
  // ) {
  //   speechSynthesis.onvoiceschanged = loadVoices;
  // }


  // press to talk button

  let btn = document.querySelector("button");
  btn.addEventListener("click", speak);


  function speak() {

    var voiceListTwo = speechSynthesis.getVoices();

    let textTyped = document.querySelector("textarea").value;
    const toSay = new SpeechSynthesisUtterance(textTyped);

    let selectedVoice = document.getElementById("voice-select").value;


    for (let i = 0; i < voiceListTwo.length; i++) {
      // this if statement doesn't work
      if (voiceListTwo[i] == selectedVoice) {
        alert("found it");
        toSay.voice = voiceListTwo[i];
      }
    }

    toSay.voice = voiceListTwo[10];
    speechSynthesis.speak(toSay);

    toSay.onstart = function () {
      document.querySelector("img").src = "assets/images/smiling-open.png";
    }

    toSay.onend = function () {
      document.querySelector("img").src = "assets/images/smiling.png";
    }

  }



}