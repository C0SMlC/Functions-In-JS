'use strict'

const greet = function(greetmsg)
{
  return function(sender)
  {
    console.log(`${greetmsg} : ${sender}`);
  }
}

const greetusingarrow = (msg) =>sender =>console.log(`${msg} : ${sender}`);
const returnedfuncion = greet("Hello");
returnedfuncion("Pratik");
returnedfuncion("Tanvi");

greet('Hii')('Pratik');

greetusingarrow('GM')("Jim");

