import React, { useEffect, useState } from "react";

const loadingMessage = "Todos is loading";

const DataFetch = () => {
  const [todos, setTodos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => {
          if(!res.ok){
            throw Error("Fetching is not succesful");
          }
          return res.json();
        })
        .then((data) => {
          setTodos(data);
          console.log(todos);
          setIsLoading(false);
        })
        .catch((error)=>{
          setError(error.message);
          setIsLoading(false);
        });
    },5000);
  }, []);




  const todosElement = 
  todos &&
        todos.map((todo) => {
          return <p key={todo.id}>{todo.title}</p>
        })

  return (
    <div>
      <h1>Todos</h1>
      {error && <p>{error}</p>}
      {isLoading && loadingMessage}
      {todosElement}
    </div>
  );
};

export default DataFetch;
