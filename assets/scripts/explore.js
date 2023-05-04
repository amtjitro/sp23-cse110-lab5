// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  const synth = window.speechSynthesis;

  synth.addEventListener('voiceschanged', loadVoices);

  // puts all the available voices into a list
  function loadVoices() {
  
    var voiceList = synth.getVoices();
  
    for (let i = 0; i < voiceList.length; i++) {

      const option = document.createElement("option");
      option.textContent = `${voiceList[i].name} (${voiceList[i].lang})`;
      option.setAttribute('value', i);
      // option.setAttribute("data-lang", voiceList[i].lang);
      // option.setAttribute("data-name", voiceList[i].name);
      selectElem.appendChild(option);
    }
    // voiceList.forEach(v => console.log(v));
  }
  
  loadVoices();

  //speechSynthesis.onvoiceschanged = loadVoices;

  // if (
  //   speechSynthesis.onvoiceschanged !== undefined
  // ) {
  //   speechSynthesis.onvoiceschanged = loadVoices;
  // }

  const selectElem = document.getElementById('voice-select');
  const textInput = document.getElementById('text-to-speak');

  // press to talk button
  let btn = document.querySelector("button");
  btn.addEventListener("click", speak);

  function speak() {

    const toSay = new SpeechSynthesisUtterance(textInput.value);

    const voices = synth.getVoices();
    const chosenVoice = voices[selectElem.value];
    toSay.voice = chosenVoice;

    synth.speak(toSay);

    toSay.onstart = function () {
      document.querySelector("img").src = "assets/images/smiling-open.png";
    }

    toSay.onend = function () {
      document.querySelector("img").src = "assets/images/smiling.png";
    }
  }


}