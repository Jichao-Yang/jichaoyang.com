const meowSound = new Audio('meow.wav');
const wowSound = new Audio('wow.mp3');

function petClick() {
    const pet = document.getElementById("pet");
    pet.style.transform = "scale(1.5)";

    meowSound.currentTime = 0;  // rewind if already playing
    meowSound.play();

    
    setTimeout(() => {
        pet.style.transform = "scale(1)";
    }, 200);
}

function ottoClick() {
    const otto = document.getElementById("otto");
    otto.style.transform = "scale(20)";

    wowSound.currentTime = 0;  // rewind if already playing
    wowSound.play();

    
    setTimeout(() => {
        otto.style.transform = "scale(1)";
    }, 1000);
}