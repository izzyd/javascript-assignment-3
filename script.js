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


// document.body.onload = addElement;

// function addElement() {
//     // create a new div element 
//     // and give it some content 
    var view = document.createElement("div");
    view.className = "view";
    document.body.appendChild(view);

    var grass = document.createElement("div");
    grass.className = "grass";
    view.appendChild(grass); //add the...to the newly created div. 

    var sun = document.createElement("div");
    sun.className = "sun";
    view.appendChild(sun);

// // while loop 
var i = 0;
while (i < 5) {
    var ray = document.createElement("div");
    ray.className = "ray-" + (i + 1);
    sun.appendChild(ray);
    i++;
}

var mountain = document.createElement("div");
mountain.className = "mountain";
view.appendChild(mountain); 

var mountainTop = document.createElement("div");
mountainTop.className = "mountain-top";
mountain.appendChild(mountainTop);

var i = 0;
do {
    var mountainCap = document.createElement("div");
    mountainCap.className = "mountain-cap-" + (i + 1);
    mountainTop.appendChild(mountainCap);
    i++
} while (i < 3);



// // while loop -- troubleshoot
// var ray1 = document.createElement("div");
// ray1.className = "ray1";
// sun.appendChild(ray1);
// //view.appendChild(ray1);
// // view.appendChild(sun); 

// var ray2 = document.createElement("div");
// ray2.className = "ray2";
// sun.appendChild(ray2);

// var ray3 = document.createElement("div");
// ray2.className = "ray3";
// sun.appendChild(ray3);

// var ray4 = document.createElement("div");
// ray2.className = "ray4";
// sun.appendChild(ray4);

// var ray5 = document.createElement("div");
// ray2.className = "ray5";
// sun.appendChild(ray5);

// var i = 0;
// while (i < 1) {
//     sun.appendChild(ray1);
//     sun.appendChild(ray2);
//     sun.appendChild(ray3);
//     sun.appendChild(ray4);
//     sun.appendChild(ray5);
//     i++;
// }
//hmm...rays not working :/ 



