function whosPaying() {
    
    /******Don't change the code above*******/
        
        //Write your code here.
        var nameLists = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
        var number = Math.floor(Math.random() * nameLists.length);
        var names = nameLists[number];
    
        return names + " is going to buy lunch today!"
        
    /******Don't change the code below*******/    
    }






    //versi 2
    var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

    function whosPaying(names) {
    
        /******Don't change the code above*******/
            
            //Write your code here.
            var number = Math.floor(Math.random() * names.length);
            var random = names[number];
        
            return random + " is going to buy lunch today!"
            
        /******Don't change the code below*******/    
        }