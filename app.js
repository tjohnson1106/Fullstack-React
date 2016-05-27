const ProductList = React.createClass({
  render: function () {
    return (
      <div className='ui items'>
        Hello, friend! I am a basic React component.
      </div>
    );
  },
});

//native HTML elements always start with a lowercase letter whereas React component names always start with an uppercase letter

ReactDOM.render(
  <ProductList />,
  document.getElementById('content')
);

