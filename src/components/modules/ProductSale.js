import { useState } from 'react';
import classnames from 'classnames';

export default function ProductSale() {
  const [productColor, setProductColor] = useState('black');
  const [productQuantity, setProductQuantity] = useState(1);
  return (
    <div className="Product Product__sale flex flex-column justify-center">
      <h3 className="Product__cost">$35.00</h3>
      <ul className="Product__color-picker Product__options flex">
        <li className="Product__color Product__color-header tc">Color</li>
        <li className="Product__color Product__color--black tc">
          <button
            className={classnames("Product__color-button", {
              active: productColor === 'black'
            })}
            onClick={() => {
              setProductColor('black');
            }}
          >black</button>
        </li>
        <li className="Product__color Product__color--beige tc">
          <button
            className={classnames("Product__color-button", {
              active: productColor === 'beige'
            })}
            onClick={() => {
              setProductColor('beige');
            }}
          >beige</button>
        </li>
      </ul>
      <ul className="Product__quantity-picker Product__options flex">
        <li className="Product__quantity">
          <button
            className="Product__quantity-button"
            onClick={() => {
              setProductQuantity(Math.max(productQuantity - 1, 1));
            }}
          >-</button>
        </li>
        <li className="Product__quantity flex-grow tc">
          quantity ({productQuantity})
        </li>
        <li
          className="Product__quantity"
          onClick={() => {
            setProductQuantity(productQuantity + 1);
          }}
        >
          <button className="Product__quantity-button">+</button>
        </li>
      </ul>
      <ul className="Product__size">
        <li className="Product__size-button-wrapper">
          <button className="Product__size-button flex justify-between">
            <span>size</span>
            <span className="Product__size-chevron">V</span>
          </button>
        </li>
      </ul>
      <div className="Product__question">
        <a href="#" className="Product__question-link">what's my size?</a>
      </div>
      <button className="Product__purchase">add to cart</button>
      <div className="Product__additional tc">
        <a href="#" className="Product__additional-link">build a cycle set and save up to 20%</a>
      </div>
    </div>
  );
};
