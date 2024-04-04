const texts = document.querySelector(".texts");

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new window.SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p");

recognition.addEventListener("result", (e) => {
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  p.textContent = text;
  texts.appendChild(p);
  p.scrollIntoView();

  if (e.results[0].isFinal) {
    //is isFinal is true then run this code
    if (text.includes("hello")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "hi";
      texts.appendChild(p);
    }

    if (
      text.includes("what is your name") ||
      text.includes("what's your name")
    ) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "I'm AX., How about you?!";
      texts.appendChild(p);
    }

    if (text.includes("open YouTube")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening YouTube...";
      window.open("https://www.youtube.com/");
      texts.appendChild(p);
    }
    p = document.createElement("p");
  }
  console.log(e);
});

recognition.addEventListener("end", () => {
  recognition.start();
});
recognition.start();
