let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "&#127987 Players 1 Win";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Players 2 Win &#127987";
} else {
    document.querySelector("h1").innerHTML = "&#127987 Draw &#127987";
}