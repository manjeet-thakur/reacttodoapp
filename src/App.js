import React, { useEffect, useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import alanBtn from "@alan-ai/alan-sdk-web";
import { app, database } from "./firebase-config";
import { addDoc, collection } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dbInstance = collection(database, "todo-list");
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    alanBtn({
      key: "684000f3677b4b26056d541049b1e2d52e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: (commandData) => {
        let todoData = commandData.data;
        if (commandData.data) {
          addDoc(dbInstance, { todo: todoData }).then(() => {
            toast.success(`Item added`);
            setUpdate(true);
          });
        }
      },
    });
  }, [update]);

  return (
    <>
      <Todo update={update} setUpdate={setUpdate} />
    </>
  );
}

export default App;
