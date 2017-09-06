var React = require('react');
var Context = require('./context.jsx');
module.exports = React.createClass({
    sayhello: function () {
        console.log('yes')
    },
    render: function () {
        return (
            <div>
                <p>hello world</p>
                <Context title="jack" />
                <button onClick={this.sayhello}>
                    click
                </button>
            </div>
        );
    }
});

