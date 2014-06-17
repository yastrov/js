'use strict';
/*
Example for HTML5 localStorage
*/

function supports_html5_storage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
}

if (!supports_html5_storage()) {
	return false;
}

for (var key in localStorage){
   console.log("Key: " + key + "\nValue: " + localStorage.getItem(key));
}

localStorage.setItem('one', 1);
console.log(localStorage.getItem('one'));
console.log(localStorage['one']);