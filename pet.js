const meowSound = new Audio('meow.wav');

function petClick() {
    const pet = document.getElementById("pet");
    pet.style.transform = "scale(1.5)";

    meowSound.currentTime = 0;  // rewind if already playing
    meowSound.play();

    
    setTimeout(() => {
        pet.style.transform = "scale(1)";
    }, 200);
}