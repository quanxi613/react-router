import React from 'react';

class Home extends React.Component {
    componentDidMount () {
        console.log('mount');
    }

    componentWillUnmount () {
        console.log('un mount');
    }

    render () {
        return (
            <h3>This is Home page.</h3>
        );
    }
};

export default Home;