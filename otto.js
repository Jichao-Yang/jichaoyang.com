const wowSound = new Audio('wow.mp3');

function ottoClick() {
    const otto = document.getElementById("otto");
    otto.style.transform = "scale(20)";

    wowSound.currentTime = 0;  // rewind if already playing
    wowSound.play();

    
    setTimeout(() => {
        otto.style.transform = "scale(1)";
    }, 1000);
}