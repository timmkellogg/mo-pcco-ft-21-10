import React from 'react';

class ToDoClass extends React.Component {
    state = {
        toDoInput: '',
        toDoList: ['get milk', 'teach class', 'be awesome']
    };

    addToDo = () => {
        if (!this.state.toDoInput) return;
        
        const newList = [...this.state.toDoList];

        newList.push(this.state.toDoInput);

        this.setState({ toDoList: newList, toDoInput: '' });
    };

    handleChangeInput = (event) => {
        this.setState({ toDoInput: event.target.value })
    }

    render() {
        return (
            <div>
                <h2>To Do App!</h2>
                <input value={this.state.toDoInput} onChange={this.handleChangeInput} />
                <button onClick={this.addToDo}>add todo</button>
                <ul>
                    {this.state.toDoList.map((item, key) => {
                        return (
                            <li key={key}>{item}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default ToDoClass;