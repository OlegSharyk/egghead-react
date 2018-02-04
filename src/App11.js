import React from 'react';
import './App.css';

class App extends React.Component {

    render(){
        return(
            <Parent>
                <div className="childA"></div>
                <div className="childB"></div>
                <div className="childC">
                    <div className="childC_inner"></div>
                </div>
            </Parent>
        )
    }
}

class Parent extends  React.Component {
    render(){
        //let items = this.props.children.map(child => child);
        //console.log(items);
        //console.log(this.props.children);

        //let items = React.Children
        //    .map(this.props.children, child => child);
        //console.log(items);

        //let items = React.Children.toArray(this.props.children);
        //console.log(items);

        //let items = React.Children
        //    .forEach(this.props.children, child => console.log(child.props.className));

        let items = React.Children.only(this.props.children);
        console.log(items);

        return null;
    }
}

export default App;