import React from 'react'
import Context from './context'

module.exports = React.createClass({
    sayhello: function () {
        console.log('yes na')
    },
    render: function () {
        return (
            <div>
                <p>hello world</p>
                <Context title="ff" />
                <button onClick={this.sayhello}>
                    click me
                </button>
            </div>
        );
    }
});

