function BellBoy (name, age, hasWorkPermit, languages) {
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
    this.clean = function() {
        alert("cleaning in progress by " + name);
    };
}

var bellBoy1 = new BellBoy("Jancok", 19, true, ["Sunda", "Jawa", "Mexico"])