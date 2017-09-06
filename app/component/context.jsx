var React = require('react');
import './context.less'
module.exports = React.createClass({
  getInitialState: function () {
    return {
      name: 'c'
    }
  },
  render: function () {
    return (
        <div className="main">
          <h1>{this.props.title} {this.state.name}</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, deserunt nostrum nulla quia quo rem sint suscipit. Atque, eveniet, quisquam?</p>
        </div>
    );
  }
});

