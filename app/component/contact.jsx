import React from 'react';

class Contact extends React.Component {
    componentDidMount () {
        console.log('mount');
    }

    componentWillUnmount () {
        console.log('un mount');
    }

    render () {
        return (
            <h3>This is Contact page.</h3>
        );
    }
};

export default Contact;