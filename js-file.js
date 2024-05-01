
/* This tutorial is for adding elements inside HTML with only using DOM Method  */

const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

//add <p> with red text that says “Hey I’m red!”

const para = document.createElement("p");
para.textContent = 'Hey I\'m red!';
content.appendChild(para);

//an <h3> with blue text that says “I’m a blue h3!”
const headerThree = document.createElement('h3');
headerThree.style.color = 'blue';
headerThree.textContent = 'I\'m a blue h3!'
content.appendChild(headerThree);

//a <div> with a black border and pink background color with the following elements inside of it:

const newDiv = document.createElement('div');
newDiv.setAttribute('style', 'background-color:pink; border:1px solid black');


//another <h1> that says “I’m in a div”
const headerOne = document.createElement('h1');
headerOne.textContent = 'I\'m in a div';
newDiv.appendChild(headerOne);

//a <p> that says “ME TOO!”
const para2 = document.createElement('p');
para2.textContent = 'Me too!';
newDiv.appendChild(para2);


container.appendChild(newDiv);

// This is the example for alert function METHOD 1
function alertFunction() {
    alert("YAY! YOU DID IT!");
  }

  // METHOD 2 & 3 with changing its property
  const btn = document.querySelector("#btn");
  btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
  });
