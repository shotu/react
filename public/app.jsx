var Greeter = React.createClass({
  render : function(){
    return (
      <div>
        <h1>Hello react in component</h1>
        <p1> this is paragraph</p1>
      </div>

    );
  }

});

ReactDOM.render(
  <Greeter/>,
  document.getElementById('app')
);
