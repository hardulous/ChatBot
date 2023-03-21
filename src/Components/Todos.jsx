import React, { useEffect } from "react";
import "./Todos.css"

const Todos = (props) => {
  console.log(props); // this prop is very usefull must explore it

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((res) => {
        const todosArr = res.slice(0, 6);

        // will not create our own state variable but will use only state provided or defined in chatBot config
        props.setState((prevState) => ({
          ...prevState,
          todos: todosArr,
        }));
      });
  }, []);

  return <div className="todos-widget">
    <h4>Todos</h4>
    <div className="todos">
        {
            props.todos.map((item,i)=>{
                return <span key={i}>{item.title}</span>
            })
        }
    </div>
  </div>;
};

export default Todos;
