import React, { useState, useEffect } from "react";
import "./style.css";
import Counter from "./Components/Counter";
import Test from "./test";
import CounterContainer from "./Containers/CounterContainer";
import TodosContainer from "./Containers/TodosContainer";
import SampleContainer from "./Containers/SampleContainer";

const App = () => {
  return (
    <div>
      <SampleContainer />
      <br />
    </div>
  );
};

// const App = () => {
//   return <Test />;
// };

export default App;
