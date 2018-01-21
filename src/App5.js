import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'; // ES6

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            a: ''
        }
    }

    update(){
        this.setState({
            //a: this.refs.a.value,
            //b: this.refs.b.value
            //a: ReactDOM.findDOMNode(this.a).value,
            a: this.a.refs.input.value,
            b: this.b.value
        })
    }

    render() {
        return (
            <div>
                <Input
                    //ref='a'
                    ref = {component => this.a = component}
                    update = {this.update.bind(this)}
                /> {this.state.a}
                <hr/>
                <input
                    //ref='b'
                    ref = {node => this.b = node}
                    type="text"
                    onChange = {this.update.bind(this)}
                /> {this.state.b}
            </div>
        )
    }
}

class Input extends React.Component {
    render() {
        return <div><input ref="input" type="text" onChange={this.props.update}/></div>
    }
}

export default App;