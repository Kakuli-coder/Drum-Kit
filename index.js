var numberOfDrumButtons = document.querySelectorAll(".drum").length;

function makeSound(key) {
    switch (key) {
        case "w":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;
    
        case "a":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;
    
        case "s":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        break;
    
        case "d":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
        break;
    
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        break;
    
        case "k":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;
    
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;
    
    default: console.log(key);
        break;
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100)
}

// Detecting Mouse Clicks
for (i=0; i<numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
            makeSound(buttonInnerHTML);
            buttonAnimation(buttonInnerHTML);
    })
}

// Detecting Keyboard Presses
document.addEventListener("keydown", function (event) {
        var buttonEventKey = event.key;
            makeSound(buttonEventKey);
            buttonAnimation(buttonEventKey);
})
