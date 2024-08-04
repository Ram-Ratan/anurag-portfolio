import React from "react";
import "./App.css";
import Section1 from "./component/Section1";
import Section2 from "./component/Section2";
import Section3 from "./component/Section3";
import Section5 from "./component/Section5";
import Section6 from "./component/Section6";
import Section7 from "./component/Section7";
import Section8 from "./component/Section8";
import Section4 from "./component/Section4";
import SubSection3 from "./component/SubSection3";

//toDo:: sub section 3 ke karan horizontal scroll aa raha hai


function App() {
  return (
    <div className="App bg-primary-0">
      <Section1 />
      <Section2 /> 
      <Section3 />
      <SubSection3 />
      <Section4 />   
      <Section5/>
      <Section6 />
      <Section7 />
      <Section8 />
    </div>
  );
}

export default App;
