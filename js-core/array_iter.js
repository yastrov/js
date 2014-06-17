'use strict';
/*Some source fragments I may be took from Internet*/

//forEach
var arr = [1, -1, 2, -2, 3];
arr.push(parseInt('1'));
arr.pop(;)
console.log(arr.join(';'));
//----------------------------------
// Iterators
//-----------------------------------
// for-in JavaScript 1.0, ECMA-262
// can not execute error, if object have flag "DontEnum"

for (var i in arr) {
  console.log(i);
}

//Use for-of (use an iterator implicitly) (ES6+)
/*ES6 (currently still being drafted) will add iterators to JavaScript.
The easiest way to use iterators is the new for-of statement. It looks like this:*/

var val;
for (val of arr) {
    console.log(val);
}
//---------
//Use an iterator explicitly (ES6+)

/*Sometimes, you might want to use an iterator explicitly.
You can do that, too, although it's a lot clunkier than for-of. It looks like this:*/

var it = arr.values();
var entry;
while (!(entry = it.next()).done) {
    console.log(entry.value);
}

//--------------
// jQuery
$.each(arr, function(index, value) {
  ;
});
//---------
// Old style
var length = arr.length;   
for (var i = 0; i < length; i++) {
  console.log(yourArray[i]);
}
//---------------------------------------
// "Stream" methods
//---------------------------------------
arr.forEach(function(item, i, arr) {
  alert(i + ": " + item + " (array:" + arr + ")");
});
arr.forEach(function(entry) {
    console.log(entry);
});

//-------------------
var positiveArr = arr.filter(function(number){
	return number > 0;
});

console.log("Filter result: "+positiveArr);

//---------------------
var squaredArr = arr.map(function(number){
	return number * number;
});
console.log("Map example result: "+squaredArr);

//----------------------------------
// every / some
function isPositive(number) {
  return number > 0;
}
console.log("Positive every: "+arr.every(isPositive) ); // false, not aall elements is positive
console.log("Positive some: "+arr.some(isPositive) ); // true, some elements is positive

//------------------------------
// reduce
var arr_s = ["a", "b", "c", "d"];
var result = arr_s.reduce(function (prevStr, currItem, i) {
  var str = prevStr + currItem;
  alert(str);
  return str;
});
console.log("Reduce result: " + result);
//----------------------------
result = arr.reduce(function (prevSum, currItem) {
  return prevSum + currItem;
});
console.log("Reduce sum result: " + result);

//----------------------------------
//Sort
result = arr.sort(function(left, right)
  //if 'number'
  return left - right;
  // if 'string'
  // return left > right;
});

