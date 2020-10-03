// var tweet = prompt("tweet your message here!");
// alert("You have written : " + tweet + " that has " + tweet.length + " character, you have " + (140 - tweet.length) + " character left");

var message = "Hello";
var yourName = prompt(message +", What the hell is ur name?");

var countNumber = yourName.length;

alert(message + " my name is" + " " + yourName + " and the length of my name was " + countNumber);

var tweetMessage = prompt("tweet your message here!");

var maxTweet = 140;
var countTweet = tweetMessage.length;
var countTweetMessage = maxTweet - countTweet;

alert("You have written : " + tweetMessage + " that has " + countTweet + " character, you have " + countTweetMessage + " character left");

var messageUnder140 = tweetMessage.slice(0,maxTweet);

alert(messageUnder140);

alert(messageUnder140.toUpperCase());

alert(messageUnder140.toLowerCase());

alert(messageUnder140.toUpperCase());

