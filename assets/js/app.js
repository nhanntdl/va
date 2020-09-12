const btn = document.querySelector(".talk");
const content = document.querySelector(".content");
const ownerName = 'Nhân';

const greetings = [
  "Im good you little of love",
  "Doing good homeboi",
  "leav me alone",
];

const speechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new speechRecognition();

recognition.onstart = function () {
  console.log("voice is activeted");
};

recognition.onresult = function (event) {
  const current = event.resultIndex;

  const transcript = event.results[current][0].transcript;
  content.textContent = transcript;
  readOutLoud(transcript);
};

recognition.lang = 'en-US';

btn.addEventListener("click", () => {
  recognition.start();
});

function readOutLoud(message) {
  const speech = new SpeechSynthesisUtterance();
  speech.text = "i dont know what you said";
  if (message.includes("How are you")) {
    const finalText = greetings[Math.floor(Math.random() * greetings.length)];
    speech.text = finalText;
  }

  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
}

function sayHi() {
  const speech = new SpeechSynthesisUtterance();
  const hellotext = 'Hello ' + ownerName + '\n Today is ' + new Date().toUTCString();
  speech.text = hellotext;
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
  content.textContent = hellotext;
}

sayHi();
