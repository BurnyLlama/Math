//spheare
function spheareArea() {
  var r = prompt('What is the radious? (Exclude units! cm, miles, km, feet, etc.) The answer will be in the same unit, but squared.');
  var answer = 4 * 3.14 * r * r;
  var ctx = document.getElementById('history').innerHTML;
  document.getElementById('history').innerHTML = "4 * 3.14 * " + r + "² = " + answer + "<br>" + ctx;
};
function spheareVolume() {
  var r = prompt('What is the radious? (Exclude units! cm, miles, km, feet, etc.) The answer will be in the same unit, but cubed.');
  var answer = 4 * 3.14 * r * r * r / 4;
  var ctx = document.getElementById('history').innerHTML;
  document.getElementById('history').innerHTML = "4 * 3.14 * " + r + "³ / 4 = " + answer + "<br>" + ctx;
};


//cone
function coneArea() {
  var r = prompt('What is the radious? (Exclude units! cm, miles, km, feet, etc.) The answer will be in the same unit, but squared.');
  var s = prompt('What is the length of the side? (Not height!) (Exclude units! cm, miles, km, feet, etc.) The answer will be in the same unit, but squared.');
  var answer = 3.14 * r * s;
  var ctx = document.getElementById('history').innerHTML;
  document.getElementById('history').innerHTML = "3.14 * " + r + " * " + s + " = " + answer + "<br>" + ctx;
};
function coneVolume() {
  var r = prompt('What is the radious? (Exclude units! cm, miles, km, feet, etc.) The answer will be in the same unit, but squared.');
  var h = prompt('What is the height? (Not thelength of the side!) (Exclude units! cm, miles, km, feet, etc.) The answer will be in the same unit, but squared.');
  var answer = 3.14 * r * r * h / 3;
  var ctx = document.getElementById('history').innerHTML;
  document.getElementById('history').innerHTML = "3.14  * " + r + "² * " + h + " / 3 = " + answer + "<br>" + ctx;
};
