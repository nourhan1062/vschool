    var input = function (str){
    var unduplicate ='';
    var duplicate = '';
        for (var i = 0; i < str.length; i++){
            if (unduplicate.indexOf(str[i]) === -1 ){
                unduplicate = unduplicate + str[i];
            }else {
                duplicate = duplicate + str[i]
            }
            }
        console.log(unduplicate);
        console.log(duplicate);
 };
input('bookkeeper larry');