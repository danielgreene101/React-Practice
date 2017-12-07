var React = require('react');
var ReactDom = require('react-dom');

var App = React.createClass({
  render: function(){
    return(
      <div>
        <div id="header"></div>
        <div className="container">
          <div className="column">
            <InboxPane />
          </div>
          <div className="column"></div>
          <div className="column"></div>
        </div>
      </div>
    );
  }
});

var InboxPane = React.createClass({
  render: function(){
    return(
    <div id="inbox-pane">
      <h1>Inbox</h1>
      <table>
        <thead>
          <tr>
            <th>Chat Log</th>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <InboxItem />
        </tbody>
      </table>
    </div>
    );
  }
});

var InboxItem = React.createClass({
  render: function(){
    return(
      <tr>
        <td>5pm</td>
        <td>Daniel got a pizza</td>
        <td>Confirmed</td>
      </tr>
    );
  }
});

ReactDom.render(<App />, document.getElementById("main"));