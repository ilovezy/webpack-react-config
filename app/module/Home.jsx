import React from 'react'
module.exports = React.createClass({
  componentDidMount: function () {
    $('h2').text('nana')
    console.log($('h2'))
  },
  sayhello: function () {
    console.log('yes na')
  },
  render: function () {
    return (
        <h2>Home</h2>
    );
  }
});

