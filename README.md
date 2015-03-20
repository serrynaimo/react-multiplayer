# react-webrtc-sync

Make your React apps render on multiple clients viw WebRTC! This leverages [Skylink](http://skylink.io) to magically make a React component's state shared across multiple clients.

## Tutorial: Synced notepad

Creating the synced notepad is very simple. First, create a simple [controlled textarea](http://facebook.github.io/react/docs/forms.html), just like you would with any form in React. We'll use [React's two-way binding helpers](http://facebook.github.io/react/docs/two-way-binding-helpers.html) to save us some typing:

```javascript
/** @jsx React.DOM */

var App = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  getInitialState: function() {
    return {text: ''};
  },
  render: function() {
    return <textarea valueLink={this.linkState('text')} />;
  }
});

React.renderComponent(<App />, document.body);
```

Next, let's make it sync between clients by adding two lines of code.

```javascript
/** @jsx React.DOM */

ReactWebRTCSync.initSkylink('Your Skylink App Key', 'room name');

var App = React.createClass({
  mixins: [React.addons.LinkedStateMixin, ReactWebRTCSync.Mixin],
  getInitialState: function() {
    return {text: ''};
  },
  render: function() {
    return <textarea valueLink={this.linkState('text')} />;
  }
});

React.renderComponent(<App />, document.body);
```

Bam. You're done.


```javascript
/** @jsx React.DOM */

var App = React.createClass({
  mixins: [React.addons.LinkedStateMixin, ReactWebRTCSync.Mixin],
  getInitialState: function() {
    return {text: ''};
  }
```

Big thanks to [Pete Hunt](https://github.com/petehunt/react-multiplayer) for his awesome work on React and react-multiplayer to get me started!
License is Apache 2.0
