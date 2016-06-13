//ProductList passes down props to Product
const ProductList = React.createClass({
  render: function () {
    const product = Data[0];
    return (
      <div className='ui items'>
        <Product
          id={product.id}
          title={product.title}
          description={product.description}
          url={product.url}
          votes={product.votes}
          submitter_avatar_url={product.submitter_avatar_url}
          product_image_url={product.product_image_url}
        />
      </div>
    );
  },
});

const Product = React.createClass({
  render: function () {
    return (
      <div className='item'>
        <div className='image'>
          <img src=
      {this.props.product_image_url} />
          <img src='images/products/image-aqua.png' />
        </div>
        <div className='middle aligned content'>
           <div className='header'>
            <a>
              <i className='large caret up icon'></i>
            </a>
            {this.props.votes}
          </div>
          <div className='description'>
            <a href={this.props.url}>
              {this.props.title}
            </a>
            <a>Fort Knight</a>
            <p>Authentic renaissance actors, delivered in just two weeks.</p>
          </div>
          <div className='extra'>
            <span>Submitted by:</span>
            <img
              className='ui avatar image'
              src=
      {this.props.submitter_avatar_url}
            />
          </div>
        </div>
      </div>
    );
  },
});

//native HTML elements always start with a lowercase letter whereas React component names always start with an uppercase letter

ReactDOM.render(
  <ProductList />,
  document.getElementById('content')
);





