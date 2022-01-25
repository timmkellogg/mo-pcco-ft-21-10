import React from 'react';

const ListItem = ({ key, item }) => (
    <li key={key}>{item}</li>
)

class ToDoClass extends React.Component {
    state = {
        toDoInput: '',
        toDoList: ['get milk', 'teach class', 'be awesome']
    };

    componentDidMount = () => {
        
    }

    componentDidUpdate = () => {
        
    }

    addToDo = () => {
        if (!this.state.toDoInput) return;
        
        const newList = [...this.state.toDoList];

        newList.push(this.state.toDoInput);

        console.log(this.state.toDoList)
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
                            <ListItem item={item} key={key} />
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default ToDoClass;