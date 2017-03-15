function playThatWasEasy()
{
    var easySound = new Audio("that_was_easy.mp3");
    easySound.play();
    alert("played");
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var buttonEasy = document.getElementById("easy");
await sleep(2000);
alert("done waiting");
buttonEasy.onclick = playThatWasEasy();