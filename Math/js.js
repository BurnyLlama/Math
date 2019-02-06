//redefine pi
var pi = 3.14;
function definePi() {
  pi = prompt('What do you want your new pi as?')
};

//spheare
function spheareArea() {
  var r = prompt('What is the radious? (Exclude units! cm, miles, km, feet, etc.) The answer will be in the same unit, but squared.');
  var answer = 4 * pi * r * r;
  var ctx = document.getElementById('history').innerHTML;
  document.getElementById('history').innerHTML = "4 * " + pi + " * " + r + "² = " + answer + "<br>" + ctx;
};
function spheareVolume() {
  var r = prompt('What is the radious? (Exclude units! cm, miles, km, feet, etc.) The answer will be in the same unit, but cubed.');
  var answer = 4 * pi * r * r * r / 4;
  var ctx = document.getElementById('history').innerHTML;
  document.getElementById('history').innerHTML = "4 * " + pi + " * " + r + "³ / 4 = " + answer + "<br>" + ctx;
};


//cone
function coneArea() {
  var r = prompt('What is the radious? (Exclude units! cm, miles, km, feet, etc.) The answer will be in the same unit, but squared.');
  var s = prompt('What is the length of the side? (Not height!) (Exclude units! cm, miles, km, feet, etc.) The answer will be in the same unit, but squared.');
  var answer = pi * r * s;
  var ctx = document.getElementById('history').innerHTML;
  document.getElementById('history').innerHTML = pi +" * " + r + " * " + s + " = " + answer + "<br>" + ctx;
};
function coneVolume() {
  var r = prompt('What is the radious? (Exclude units! cm, miles, km, feet, etc.) The answer will be in the same unit, but squared.');
  var h = prompt('What is the height? (Not thelength of the side!) (Exclude units! cm, miles, km, feet, etc.) The answer will be in the same unit, but squared.');
  var answer = pi * r * r * h / 3;
  var ctx = document.getElementById('history').innerHTML;
  document.getElementById('history').innerHTML = pi + " * " + r + "² * " + h + " / 3 = " + answer + "<br>" + ctx;
};
