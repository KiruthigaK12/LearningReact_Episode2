/*import React from "react";
import ReactDOM from "react-dom/client"

const heading =React.createElement("h1",{},"Hi this is Kiruthiga Kumaran a React Developer");
const root=ReactDOM.createRoot(document.getElementById("root"));
const Heading3=()=> {
    return (
      <button>I'm a button</button>
    );
}

//const root=ReactDOM.createRoot(document.getElementById("root"));
const heading2=<h2>Parcel is a Beast</h2>
root.render(Heading3);

//Functional component

*/
import { REFUSED } from "dns";
import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement("h1", {}, "Hi this is Kiruthiga Kumaran a React Developer");

const Heading3 = function() {
  return (
    <button>I'm a button</button>
  );
}

const number=10000;

const Kir = () => {
    return(
       
      <h2>
        She is a smart and a kind hearted girl.
        <br></br>
        <Heading3/>
        <h3>{number}</h3>
      </h2>
      
    );
   
}
  
  const root2 = ReactDOM.createRoot(document.getElementById("root2"));
  root2.render(<Kir />);
//VVVVI
//THIS IS A ELEMENT IN A JSX.

const heading2 = <h2>Parcel is a Beast</h2>;

const App = () => {
  return (
    <>
      {heading}
      <Heading3/>
      {heading2}
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));


//Assignment
 
const hearted = React.createElement("h1", { className: "title" }, "This is a cracker series");

const rootElement = document.querySelector(".title");

const root = ReactDOM.createRoot(rootElement);

root.render(hearted);



function Title112() {
  return (
    <div>
      <h1>SFPOPOS</h1>
    </div>
  )
}

root.render(<Title112></Title112>)
