'use strict'

function outerfunction(outervalue) {
    return function innerfunction(innervalue)
    {
        console.log(outervalue);
        console.log(innervalue);
    }
}

const Closure = outerfunction('Outsider');
Closure('insider');