
/*var sum=0;
for(var i=2; i<process.argv.length; i++){
  sum +=parseInt(process.argv[i]);
}
console.log(sum);*/


//use of readFileSync
/*var fs = require("fs");
//do not uncommetn this - it can be any text-- console.log(contents.toString());(you can type this cons. after the code)
var contents = fs.readFileSync(process.argv[2]);
console.log(contents.toString());
var lines=contents.toString().split("\n");
console.log (lines.length-1);*/


//read using readFile()
var fs = require('fs');
/*var num;*/
fs.readFile("test.txt","utf8", function(err, data){
    if(err) throw err;
    console.log(data);
    /*data.split("\n").forEach(function(line){
      num++;
    });
    console.log(num);*/
});

/*var fs = require('fs');
fs.readFile("test.txt", "utf8", function(err, data){
   if(err) throw err;
   console.log(data);
});*/

/*function data(contents){
 var lines=contents.toString().split("\n");
 console.log(lines.length-1);
}

var fs = require('fs');
var num=-1;
fs.readFile(process.argv[2], function(err, data){
   data.toString().split('\n').forEach(function(line){
       num++;
   });
   console.log(num);
});*/



