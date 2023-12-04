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
import SampleClass from "./class_component_practice/SampleClass";
import ClassComponentOne from "./class_component_practice/ClassComponentOne";
import ClassState from "./class_component_practice/ClassState";
import ClassStatePractice from './class_component_practice/ClassStatePractice'
import Child from "./components/STATE_LIFTING/Child";
import Todo from "./components/Todo";
import NewTodo from "./components/NewTodo";
import Home from "./components/STATE_LIFTING/Home";
import ClassStateComplex from "./class_component_practice/ClassStateComplex";
import UseEffectExamplt from "./components/useEffect/UseEffectExamplt";
import DataFetch from "./components/useEffect/DataFetch";
import ClassStateUpdate from "./class_component_practice/ClassStateUpdate";
import ComponentDidMount from "./class_component_practice/ComponentDidMount";
import ComponentDidUpdate from "./class_component_practice/ComponentDidUpdate";
import Signup from './form-validation/Signup'

function App() {
  const data = "I am parent app";

  const handleChildData = (childData) => {
    console.log("From child app : " + childData);
  }

  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };


  const handleNewTodo = (newTodo) => {
    console.log(newTodo);
  }

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
      {/* <Form/> */}
      {/* <SampleClass param = "Passing parameter to class component"/> */}
      {/* <ClassComponentOne/> */}
      {/* <ClassState/> */}
      {/* <ClassStatePractice/> */}
      {/* <Child data = {data} onChildData={handleChildData}/> */}
      {/* <Todo title = "learn react.js"/>
      <NewTodo onHnadleNewTodo={handleNewTodo}/> */}
      {/* <Home/> */}
      {/* <ClassStateComplex/> */}
      {/* <UseEffectExamplt/> */}
      {/* <DataFetch/> */}
      {/* <ClassStateUpdate/> */}
      {/* <ComponentDidMount/> */}
      {/* <ComponentDidUpdate/> */}
      <Signup/>
    </div>
  );
}

export default App;
