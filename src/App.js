import React, { useCallback, useState } from "react";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import ReactBootstrap from "./components/ReactBootstrap/ReactBootstrap";
import Conditional_Rendering from './components/ConditionalRendering/index'
import Card1 from "./components/Destructuring/Card1";
import Card2 from "./components/Destructuring/Card2";
import State from "./components/State/State";
import Event_Handler_Class from "./components/EventHandlerClass";
import Event_Binding from "./components/EventBinding/index";
import Hook_UseState1 from "./components/HookUseState/index1";
import Hook_UseState2 from "./components/HookUseState/index2";
import EventBubbling from "./components/EventBubbling/EventBubbling";
import Form from "./components/Form/Form";
import SampleClass from "./components/ClassComponentPractice/SampleClass";
import ClassComponentOne from "./components/ClassComponentPractice/ClassComponentOne";
import ClassState from "./components/ClassComponentPractice/ClassState";
import ClassStatePractice from './components/ClassComponentPractice/ClassStatePractice'
import Child from "./components/StateLifting/Child";
import Todo from "./components/Todo";
import NewTodo from "./components/NewTodo";
import Home from "./components/StateLifting/Home";
import ClassStateComplex from "./components/ClassComponentPractice/ClassStateComplex";
import UseEffectExamplt from "./components/UseEffect/UseEffectExample";
import DataFetch from "./components/UseEffect/DataFetch";
import ClassStateUpdate from "./components/ClassComponentPractice/ClassStateUpdate";
import ComponentDidMount from "./components/ClassComponentPractice/ComponentDidMount";
import ComponentDidUpdate from "./components/ClassComponentPractice/ComponentDidUpdate";
import Signup from './components/FormValidation/Signup'
import NestedMapping from "./components/MappingData/NestedMapping";

function App() {
  const data = "I am parent app";

  const handleChildData = (childData) => {
    console.log("From child app : " + childData);
  }

  const handleNewTodo = (newTodo) => {
    console.log(newTodo);
  }

  return (
    <div>
      {/* <span className="iconfacebook">
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
      {/* <EventBubbling/> */}
      {/* <Form/> */}
      {/* <SampleClass param = "Passing parameter to class component"/> */}
      {/* <ClassComponentOne/> */}
      {/* <ClassState/> */}
      {/* <ClassStatePractice/> */}
      {/* <Child data = {data} onChildData={handleChildData}/> */}
      {/* <Todo title = "learn react.js"/> */}
      {/* <NewTodo onHnadleNewTodo={handleNewTodo}/> */}
      <Home/>
      {/* <ClassStateComplex/> */}
      {/* <UseEffectExamplt/> */}
      {/* <DataFetch/> */}
      {/* <ClassStateUpdate/> */}
      {/* <ComponentDidMount/> */}
      {/* <ComponentDidUpdate/> */}
      <Signup/>
      {/* <NestedMapping/> */}
      {/* <Card1 title="Titl1" desc="Desc1"/>
      <Card2  title="Titl2" desc="Desc2"/> */}
    </div>
  );
}

export default App;
