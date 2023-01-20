var fullName = prompt("Enter your name ")
function voyelles(voy){
    var newName = "";
for (let i = 0; i < voy.length; i++){
    switch(voy[i]){
        case  "a":
        newName = newName + "a, ";
        break;
        
        case  "e":
        newName = newName + "e, ";
        break;

        case  "i":
        newName = newName + "i, ";
        break;

        case  "o":
        newName = newName + "o, ";
        break;

        case  "u":
        newName = newName + "u, ";
        break;

        case  "y":
        newName = newName + "y, ";
        break;
    }
}
return "Here are all the vowels in your name: " + newName;
}
alert(voyelles(fullName));