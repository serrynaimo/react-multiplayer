/** @jsx React.DOM */
var React = require('react/addons');
var ReactWebRTCSync = require('../');
var marked = require('react-marked');

ReactWebRTCSync.initSkylink('48f72309-6dd1-47bb-9dd2-aa43f4a6a14a', 'myroom');

var Notepad = React.createClass({
  mixins: [ReactWebRTCSync.Mixin, React.addons.LinkedStateMixin],

  getInitialState: function() {
    return {text: ''};
  },

  render: function() {
    return (
      <div style={{position: 'absolute', left: 0, right: 0, top: 0, bottom: 0}}>
        <textarea valueLink={this.linkState('text')} style={{position: 'absolute', left: 0, width: '50%', top: 0, bottom: 0}} />
        <div style={{position: 'absolute', right: 0, width: '50%', top: 0, bottom: 0, overflow: 'scroll'}}>{marked(this.state.text)}</div>
      </div>
    );
  }
});

React.render(<Notepad />, document.body);
