import Head from "next/head";
import { Inter } from "next/font/google";

import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [todo, setTodo] = useState("");
  const [toDoArray, setToDoArray] = useState([]);
  const handelinput = (e) => {
    setTodo(e.target.value);
  };
  const handelToDo = (e) => {
    e.preventDefault();
    setToDoArray([...toDoArray, todo]);
    setTodo(""); // Clear the input field after adding the new item
  };
  const deleteToDo = (item) => {
    const newToDoArray = [...toDoArray];
    newToDoArray.splice(item, 1);
    setToDoArray(newToDoArray);
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        ></link>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"
          rel="stylesheet"
        />
      </Head>
      <div className="mainbody d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-center">Todo App</h1>
        <div className="input-group mb-3">
          <input
            type="text"
            onChange={handelinput}
            value={todo}
            className="form-control"
            placeholder="Enter Todo's"
            aria-label="Enter Todo's"
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={handelToDo}
          >
            Add
          </button>
        </div>
        <ul className="list-group">
          {toDoArray.map((item, index) => (
            <li
              className="list-group-item d-flex justify-content-between"
              key={index}
            >
              {item}
              <div className="text-end">
                <button
                  className="btn btn-sm  text-dark"
                  onClick={() => deleteToDo(index)}
                >
                  <i className="bi bi-trash-fill"></i>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
