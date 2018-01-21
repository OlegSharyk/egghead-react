import React from 'react';
//import Button from './Button.jsx';

class App extends React.Component {
    render (){
        return <Button>O <Heart /> React </Button>
    }
}

const Button = (props) => <button>{props.children}</button>

class Heart extends React.Component {
    render (){
        return <span>&hearts;</span>
    }
}

export default App;