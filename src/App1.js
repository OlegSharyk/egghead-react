import React from 'react';
import PropTypes from 'prop-types'; // ES6

class App extends React.Component {
    constructor (){
        super();

        this.state = {
            text: 'this is state text',
            cat:0
        }
    }

    update(e){
        this.setState({
            text: e.target.value
        })
    }

    render () {
        return (
            <div>
                <h1 className="App">Hello World New</h1>
                <h2>New</h2>
                <h3>{this.props.text}</h3>
                <h4>{this.state.text} - {this.state.cat}</h4>

                <div>
                    <Widget update={this.update.bind(this)} />
                    <Widget update={this.update.bind(this)} />
                    <Widget update={this.update.bind(this)} />
                </div>
            </div>
        )
    }
}

App.propTypes = {
    text: PropTypes.string,
    cat: PropTypes.number.isRequired
}

App.defaultProps = {
    text: 'this is default text',
    cat: 1
}

const Widget = (props) =>  <input type="text" onChange={props.update} />

export default App;