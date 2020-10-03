function beer(number) {
    while (number >= 1) {
        var bottleWord = "bottles"
        if (number === 1){
            bottleWord = "bottle"
        }
        console.log(
            number +
                " " + bottleWord + " of beer on the wall, " +
                number +
                " " + bottleWord + " of beer. Take one down and pass it around, " +
                (number - 1) +
                " " + bottleWord + " of beer on the wall."
        );
        number--;
    }
    console.log(
        "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall."
    );
}

function beer2() {
    var numberOfBottles = 99;
    while (numberOfBottles >= 0) {
        var bottleWord = "bottle";
        if (numberOfBottles === 1) {
            bottleWord = "bottles";
        }
        console.log(
            numberOfBottles + " " + bottleWord + " of beer on the wall"
        );
        console.log(numberOfBottles + " " + bottleWord + " of beer,");
        console.log("Take one down, pass it around,");
        numberOfBottles--;
        console.log(
            numberOfBottles + " " + bottleWord + " of beer on the wall."
        );
    }
}
