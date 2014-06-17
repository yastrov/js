'use strict';
/*
Create HTML element and add to document tree.
*/
var iDiv = document.createElement("div");
iDiv.setAttribute("id", 'secondMyId');
iDiv.innerHTML = "<p><i>My New HTML</i></p>"
// OR another way
iDiv.appendChild(document.createTextNode(text));
// Append for parent
document.getElementById("myid").parentNode.appendChild(iDiv);

//------------------------------------------
/*
insertAdjacentHTML before li with content 4:
*/
/*<ul>
  <li>1</li>
  <li>2</li>
  <li>4</li>
</ul>
*/
var ul = document.body.children[0];
var li4 = ul.children[2];

li4.insertAdjacentHTML("beforeBegin", "<li>3</li>");