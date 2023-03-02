// All normal functions are first call functions

// Higher value functions are the functions which take  other functons as arguments

// =>>>>>>> EXAMPLE

const oneword = function (str) {
  return str.replace(/ /g, " ");
};
const upperfirstword = function (str) {
  const [first, ...others] = strptr.split(" ");
};

function transformstr(str, fn) {
  return fn(str);
}

console.log(transformstr("hi gj hkhj", oneword));

strptr = "Hii PRATIK HOW ARE YOU";
const [first, ...others] = strptr.split(" ");
console.log([first.toUpperCase(), ...others].join(" "));

(function () {
  console.log("Hii");
})();

function print(name, fnc) {
  console.log(`${name} is ${fnc} years old`);
}

function calcage(birthYear) {
  return 2023 - birthYear;
}

print("Pratik", calcage(2002));
