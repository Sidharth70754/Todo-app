import { useState } from "react";
import axios from "axios";

export function CreateTodo(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleAddTodo = async () => {
        try {
            const response = await axios.post("http://localhost:3000/todo", {
                title: title,
                description: description
            });
            alert("Todo added");
        } catch (error) {
            console.error("Error adding todo:", error);
        }
    };

    return (
        <div>
            <input
                id="title"
                style={{
                    padding: 10,
                    margin: 10
                }}
                type="text"
                placeholder="title"
                onChange={(e) => setTitle(e.target.value)}
            />{" "}
            <br />
            <input
                id="desc"
                style={{
                    padding: 10,
                    margin: 10
                }}
                type="text"
                placeholder="description"
                onChange={(e) => setDescription(e.target.value)}
            />{" "}
            <br />
            <button
                style={{
                    padding: 10,
                    margin: 10
                }}
                onClick={handleAddTodo}
            >
                Add a todo
            </button>
        </div>
    );
}
