import React, { useState, useEffect, useReducer } from "react";
import "./App.css";

function reducerFN(state, action) {
  switch (action.type) {
    case "TOGGLE":
      return { vari: !state.vari };
    default:
      return state;
  }
}

function App() {
  const [emailState, dispatchEmail] = useReducer(reducerFN, {
    vari: true,
  });
  const [passwordState, dispatchPassword] = useReducer(reducerFN, {
    vari: true,
  });
  const [formState, dispatchForm] = useReducer(reducerFN, {
    vari: true,
  });
  const toggleHandler = function () {
    dispatchEmail({ type: "TOGGLE" }); // toggles emailState
  };
  
  //$ The code in here executes after the email state gets changed (post button press)
  useEffect(() => {
    dispatchPassword({ type: "TOGGLE" }) // toggle from true -> false
    console.log("passwordState in useEffect scope:", passwordState.vari); // change occurs immediately
  }, [emailState.vari]);
  return (
    <div>
      <h1>Toggle state</h1>
      <button onClick={toggleHandler}>email state changer</button>
    </div>
  );
}
export default App;

