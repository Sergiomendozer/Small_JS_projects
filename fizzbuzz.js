// node fizzbuzz.js
function fizzbuzz(n)
{
    for (var i = 1; i <= n; i += 1)
    {
        if (i%3 == 0 && i%5 == 0 ){console.log(`${i} FizzBuzz`);}
        else{console.log(i);}
    }

}

const prompt = require("prompt-sync")({ sigint: true });
let n = parseInt(prompt("Enter the number you want to print 1 to :"));
fizzbuzz(n)
