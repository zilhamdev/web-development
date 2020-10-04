function anotherEventListener(typeOfEvent, callbackFunction) {
    var eventHappened = {
        keyType: "keypress",
        keyPressed: "x",
        keyTimePressed: 2
    }

    if (eventHappened.keyType === typeOfEvent) {
        callbackFunction(eventHappened);
    } else {
        alert("error");
    }
}

anotherEventListener("keypress", function (event) {
    console.log(event);
 });