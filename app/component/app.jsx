import React from 'react';
import {Link} from 'react-router';

class App extends React.Component {
    render () {
        return (
            <div>
                <h1>React Router Demo</h1>                
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/list/1">List 1</Link></li>
                    <li><Link to="/list/2">List 2</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
};

export default App;