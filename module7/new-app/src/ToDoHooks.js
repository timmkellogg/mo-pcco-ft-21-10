import { useState } from 'react';

function ToDoHooks() {
    const [toDoInput, setToDoInput] = useState('');
    const [toDoList, setToDoList] = useState([{text: 'get milk', completed: false}, {text: 'teach class', completed: false}, {text: 'be awesome', completed: false}]);

    const addToDo = () => {
        if (!toDoInput) return;
        
        const newList = [...toDoList];

        newList.push({text: toDoInput, completed: false });

        setToDoList(newList);
        setToDoInput('');
    }

    const deleteToDo = (index) => {
        const newArray = [...toDoList];

        newArray.splice(index, 1);

        setToDoList(newArray);
    }

    const toggleToDo = (index) => {
        const newArray = [...toDoList];

        newArray[index].completed = !newArray[index].completed;

        setToDoList(newArray);
    }

    return (
            <div>
                <h2>To Do App!</h2>
                <input value={toDoInput} onChange={(event) => setToDoInput(event.target.value)} />
                <button onClick={addToDo}>add todo</button>
                <ul>
                    {toDoList.map((toDo, key) => {
                        return (
                            <li key={key} style={{ textDecoration: toDo.completed && 'line-through' }}>
                                <span onClick={() => toggleToDo(key)}>{toDo.text}</span>
                                <button onClick={() => deleteToDo(key)}>x</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
}

export default ToDoHooks;