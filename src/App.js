import React, { useCallback, useState } from "react";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import ReactBootstrap from "./components/React_Bootstrap/ReactBootstrap";
import Card from "./components/Card";
import State from "./components/State/State";
import Conditional_Rendering from "./components/conditional_rendering";
import Event_Handler_Class from "./components/Event_Handler_Class";
import Event_Binding from "./components/Event_Binding/index";
import Hook_UseState1 from "./components/Hook_UseState/index1";
import Hook_UseState2 from "./components/Hook_UseState/index2";
import EventBubbling from "./components/EventBubbling";
import Form from "./components/Form/Form";
import SampleClass from "./SampleClass";
import ClassComponentOne from "./ClassComponentOne";
import ClassState from "./ClassState";
import ClassStatePractice from './ClassStatePractice'

function App() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };
  return (
    <div>
      {/* <h1>Hello</h1>
      <span className="iconfacebook">
        <FaFacebook/>
      </span>
      <span className="iconyoutube">
        <FaYoutube/>
      </span> */}
      {/* <ReactBootstrap/> */}
      {/* <State/> */}
      {/* <Conditional_Rendering/> */}
      {/* <Event_Handler_Class/> */}
      {/* <Event_Binding/> */}
      {/* <Hook_UseState2/> */}
      {/* <h1>Count : {count}</h1>
      <button onClick={handleIncrement}>+</button> */}
      {/* <EventBubbling/> */}
      <Form/>
      {/* <SampleClass param = "Passing parameter to class component"/> */}
      {/* <ClassComponentOne/> */}
      {/* <ClassState/> */}
      <ClassStatePractice/>
    </div>
  );
}

export default App;
