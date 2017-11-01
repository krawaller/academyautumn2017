var bool =  true;

while(bool){
    var randomtal = Math.floor(Math.random()*10)+1;
    var i =0;

    do {
        console.log(randomtal);
        var guess =prompt("Skriv in ett tal mellan 1 och 10");
        if(guess == null){
            bool = false;
        }
    

        if (parseInt( guess) === randomtal) {
            alert("YOU HAVE WON");
            break;
        
        }else {
            alert("You suck! " + i);
            i++;
            if(i>2){
                break;
            }
        }
        
    } while ( guess!=null);
}