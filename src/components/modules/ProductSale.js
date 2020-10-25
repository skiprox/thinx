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
        <li className="Product__size">
          <button
            className="Product__size-button"
            onClick={() => {
              setProductQuantity(Math.max(productQuantity - 1, 1));
            }}
          >-</button>
        </li>
        <li className="Product__size flex-grow tc">
          quantity ({productQuantity})
        </li>
        <li
          className="Product__size"
          onClick={() => {
            setProductQuantity(productQuantity + 1);
          }}
        >
          <button className="Product__size-button">+</button>
        </li>
      </ul>
    </div>
  );
};
