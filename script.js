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

// // Set up canvas!?
// var a_canvas = document.getElementById("a");
// var context = a_canvas.getContext("2d");

// Set up canvas v2!? 


document.body.onload = addElement;

function addElement () { 
  // create a new div element 
  // and give it some content 
  var view = document.createElement("div"); 
  view.className = "view";
  document.body.appendChild(view); 

  var grass = document.createElement("div"); 
  grass.className = "grass";
  view.appendChild(grass); //add the...to the newly created div. 

  var sun = document.createElement("div");
  sun.className = "sun";
  view.appendChild(sun); 

//   // add the newly created element and its content into the DOM ?
//   var currentDiv = document.getElementById("grass"); 
//   document.body.insertBefore(newDiv, currentDiv); 

//     var currentDiv = document.getElementById("sun"); 
//   document.body.insertBefore(newDiv, currentDiv); 
}


// while loop 


