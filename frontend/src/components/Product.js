import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

export default function Product(props) {
  const { product } = props;
  return (
    <div key={product._id} className="col-lg-3 col-md-6 mb-2 mt-2 mb-lg-0">
      <div className="card rounded shadow-sm border-0">
        <div className="card-body p-4">
          <Link to={`/product/${product._id}`}>
            <img
              src={product.image} alt={product.name}
              className="img-fluid d-block mx-auto mb-3" style={{maxHeight: "200px"}} />
            </Link>
            <h5> <Link to={`/product/${product._id}`} className="text-dark">{product.name}</Link></h5>
            <h2>UGX.{product.sizes[0].price}</h2>
            <ul className="list-inline small">
              <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
              <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
              <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
              <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
              <li className="list-inline-item m-0"><i className="fa fa-star-o text-success"></i></li>
            </ul>
            <Rating
              rating={product.rating}
              numReviews={product.numReviews}
            ></Rating>
              </div>
        </div>
      </div>
  );
}
