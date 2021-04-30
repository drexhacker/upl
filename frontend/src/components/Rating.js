import React from 'react';

export default function Rating(props) {
  const { rating, numReviews, caption } = props;
  return (
    <ul className="list-inline small text-primary">
      <li className="list-inline-item m-0">
        <i
          className={
            rating >= 1
              ? 'bi bi-star-fill'
              : rating >= 0.5
              ? 'bi bi-star-half'
              : 'bi bi-star'
          }
        ></i>
      </li>
      <li className="list-inline-item m-0">
        <i
          className={
            rating >= 2
              ? 'bi bi-star-fill'
              : rating >= 1.5
              ? 'bi bi-star-half'
              : 'bi bi-star'
          }
        ></i>
      </li>
      <li className="list-inline-item m-0">
        <i
          className={
            rating >= 3
              ? 'bi bi-star-fill'
              : rating >= 2.5
              ? 'bi bi-star-half'
              : 'bi bi-star'
          }
        ></i>
      </li>
      <li className="list-inline-item m-0">
        <i
          className={
            rating >= 4
              ? 'bi bi-star-fill'
              : rating >= 3.5
              ? 'bi bi-star-half'
              : 'bi bi-star'
          }
        ></i>
      </li>
      <li className="list-inline-item m-0">
        <i
          className={
            rating >= 5
              ? 'bi bi-star-fill'
              : rating >= 4.5
              ? 'bi bi-star-half'
              : 'bi bi-star'
          }
        ></i>
      </li>
      {caption ? (
        <li className="list-inline-item m-1">{caption}</li>
      ) : (
        <li className="list-inline-item m-1">{numReviews + ' reviews'}</li>
      )}
    </ul>
  );
}
