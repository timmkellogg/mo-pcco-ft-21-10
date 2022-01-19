class App extends React.Component {
    state = {
        name: 'Tim',
        someArray: [1, 2, 3, 4, 5, 6, 7, 8],
    }

    handleButtonClick = () => {
        
    };

    render() {
        return (
            <div>
                Hello, {this.state.name}
                <ul>
                    {this.state.someArray.map((num) => {
                        return <li>{num}</li>
                    })}
                </ul>
                <button>click me</button>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))