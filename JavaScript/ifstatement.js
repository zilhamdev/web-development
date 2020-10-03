prompt("What is ur name?");
prompt("What is their name?");

var loveScore =  Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

if (loveScore > 70) {
console.log("Your love score is " + loveScore + "% it is perfect" );
}
else if (loveScore >= 50 && loveScore <= 70) {
  console.log("Your love score is " + loveScore + "% it is normal" );
}
else {
  console.log("Your love score is " + loveScore + "% it sucks" );
}