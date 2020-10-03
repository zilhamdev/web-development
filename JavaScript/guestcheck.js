var guestLists=["dadut", "kentut", "bau", "banget", "yowes", "lahyo"];
var checkGuest = prompt("Whats ur name?");

if (guestLists.includes(checkGuest)) {
    alert("Welcome");
} else {
    alert("Get the hell out of here");
}