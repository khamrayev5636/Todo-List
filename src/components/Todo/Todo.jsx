import { useRef, useState } from "react";
import { List } from "../List";
import { Item } from "../Item";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Todo = () => {
  // Todo UseState

  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  // UseRef function

  const inputRef = useRef("");

  // OnSubmit function form

  const hanleSubmit = (evt) => {
    evt.preventDefault();

    setTodos([
      ...todos,
      {
        id: todos[todos.length - 1]?.id + 1 || 1,
        text: inputRef.current.value,
        isCompleted: false,
      },
    ]);

    inputRef.current.value = "";
    toast.success("Todo Added!");
  };

  // Delete function

  const hanleDelete = (todoId) => {
    const filterId = todos.filter((todo) => todo.id !== todoId);
    setTodos([...filterId]);
    toast.error("Todo Delete!");
  };

  // Edit function

  const hanleEdit = (todoId, todoText) => {
    const newText = prompt("Yangi text kiriting", todoText);

    const findId = todos.find((todo) => todo.id === todoId);

    findId.text = newText;

    setTodos([...todos]);
    toast.warning("Todo Edit!");
  };

  const hanleChecked = (todoId) => {
    const findId = todos.find((todo) => todo.id === todoId);

    findId.isCompleted = !findId.isCompleted;

    setTodos([...todos]);

    console.log(todos);
  };

  // localStorage function

  localStorage.setItem("todos", JSON.stringify(todos));

  return (
    <div className="container max-w-[1240px] w-full mx-auto px-5">
      <div className="wrapper max-w-[500px] w-full mt-12 mx-auto p-4 rounded-[4px] bg-[#f2f2f3]">
        <h1 className="mb-6 text-center uppercase font-bold text-3xl">
          Todo App
        </h1>
        <form onSubmit={hanleSubmit} className="mb-5">
          <input
            ref={inputRef}
            className="max-w-[360px] w-full me-3 px-2 py-[12px] rounded outline-none"
            type="text"
            placeholder="Add Todo"
          />
          <button
            className="todo-btn bg-[#9D5BF0] text-white px-[30px] py-[12px] rounded"
            type="submit"
          >
            Send
          </button>
        </form>
        <List>
          {todos.map((item) => {
            return (
              <Item
                key={item.id}
                {...item}
                hanleDelete={hanleDelete}
                hanleEdit={hanleEdit}
                hanleChecked={hanleChecked}
              />
            );
          })}
        </List>
        <p className="text-center font-bold italic">
          You have {todos.length} todos
        </p>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};
