'use strict'

function call(name,age=18)
{
    console.log(`Name is ${name} : ${age}`);
}

call("Pratik",undefined);
call("Pratik", );
call("Pratik", 20);
