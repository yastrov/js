'use strict';
/*
Control of executing operators.

|| - OR
&& - AND
!  - Not

!=
==
=== (без преобразования типов)
!==
>=
<=
+=
*/
var i = 6;

if (i == 6) {
	console.log(i);
}
if (i === 6) { // More Fast
	console.log(i);
}
//---------
if (i < 3) {
  ;
} else if (i > 5) {
  ;
} else {
  ;
}
//----------
console.log( !true ) // false
aconsole.log( !0 )  // true
//-----------
for (var i=0; i<3; i++) {
  console.log(i);
}
//-------------
while (i < 3) {
  console.logt(i);
  i++;
}
//--------------------
i = 0;
do {
  console.log(i);
  i++;
} while (i < 3);

//--------------------
// switch
switch(i) {
  case '0':
  case '1':
    alert('Zero or One');

  case '2':
    alert('Two');
    break;

  case null: 
    alert('Problems');
    break;

  default:
    alert('Unknown: ' + arg)
}