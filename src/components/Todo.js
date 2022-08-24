import React, { useState, useEffect } from "react";
import { database } from "../firebase-config";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Todo({ update, setUpdate }) {
    const [todoList, setTodoList] = useState([]);
    const [deleted, setDeleted] = useState(false);
    const dbInstance = collection(database, "todo-list");

    useEffect(() => {
        const getData = async () => {
            let data = await getDocs(dbInstance);
            setTodoList(data.docs.map((item) => ({ ...item.data(), id: item.id })));
            setDeleted(false);
        };
        getData();
        setUpdate(false);
    }, [update, deleted]);

    const deleteItems = (id) => {
        const data = doc(database, "todo-list", id);
        deleteDoc(data).then(() => {
            setDeleted(true);
            toast.success("Todo Deleted");
        });
    };
    return (
        <div>
            <ToastContainer />
            <h2 className="todo-header">Todo List using React and ALAN AI</h2>
            <h4 className="todo-header conv">I also do little conversation</h4>

            <div className="todo-main">
                {todoList.map((item) => {
                    return (
                        <div className="todo-items">
                            <p className="todo-item">{item.todo}</p>
                            <p className="close-icon" onClick={() => deleteItems(item.id)}>
                                X
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Todo;
