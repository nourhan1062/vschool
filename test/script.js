var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];  
var alphabet = "abcdefghijklmnopqrstuvwxyz";  
var newArray = ""
for (i = 0; i < people.length; i++){
    newArray.push([people[i]]);
    for (j = 0; j < alphabet.length; j++){
        newArray.push([alphabet[j]]);
    };
};