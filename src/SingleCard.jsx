const SingleCard = ({ product, handleBtn }) => {
  return (
    <div className="card-container">
      <img className="img-style" src={product.image} alt="" />
      <h1>{product.title.slice(0, 10)}</h1>
      <p>{product.description}</p>
      <div className="card-footer">
        <h3>{product.price}</h3>
        <button onClick={() => handleBtn(product)}>Add to cart</button>
      </div>
    </div>
  );
};

export default SingleCard;
