// Do your work in this file.
// ok. 

// document.body.onload = addElement;

// function addElement () { 
//   // create a new div element 
//   // and give it some content 
//   var newDiv = document.createElement("div"); 
//   var newContent = document.createTextNode("Hi there and greetings!"); 
//   newDiv.appendChild(newContent); //add the text node to the newly created div. 

//   // add the newly created element and its content into the DOM 
//   var currentDiv = document.getElementById("div1"); 
//   document.body.insertBefore(newDiv, currentDiv); 
// }

document.body.onload = addElement;

function addElement () { 
  // create a new div element 
  // and give it some content 
  var view = document.createElement("div"); 
  document.body.appendChild(view); 
  var grass = document.createElement("grass"); 
  view.appendChild(grass); //add the...to the newly created div. 
  var sun = document.createElement("sun");
  view.appendChild(sun); 

//   // add the newly created element and its content into the DOM 
//   var currentDiv = document.getElementById("div1"); 
//   document.body.insertBefore(newDiv, currentDiv); 
}



