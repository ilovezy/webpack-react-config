var React = require('react');
module.exports = React.createClass({
  getInitialState: function () {
    return {
      name: 'cc'
    }
  },
  render: function () {
    return (
        <div>
          <h1>{this.props.title} {this.state.name}</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, deserunt nostrum nulla quia quo rem sint suscipit. Atque, eveniet, quisquam?</p>
        </div>
    );
  }
});

