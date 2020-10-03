var yourName = prompt(message +", What the hell is ur name?");
var firstCharName = yourName.slice(0,1).toUpperCase();
var lastName = yourName.slice(1,yourName.length).toLowerCase();
alert("Oh your name was " + firstCharName + lastName);

