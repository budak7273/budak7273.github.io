function playThatWasEasy()
{
    var easySound = new Audio("that_was_easy.mp3");
    easySound.play();
    alert("played");
}

//var easyButton = $("#easy");
$("#easy").on("click", playThatWasEasy);


//var buttonEasy = document.getElementById("easy");
//alert("done waiting");
//buttonEasy.onclick = playThatWasEasy();
