var name = 'Amr hneady';
var age = 25;
var inLove = true;
var friend = ['SouSOu', 'Roro', 'JOJO'];
var Nonfriend = ['Toto', 'Jane', 'Kamal'];
var Myfish = ['angle','clown','mandarin','surgeon'];
var removed = function(Myfish) {
    return Myfish.splice(2, 2);
};
console.log(removed(Myfish));
