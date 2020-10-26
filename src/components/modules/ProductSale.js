import { useState } from 'react';
import classnames from 'classnames';
import ScrollLockComponent from 'components/utils/scrollLockComponent';

export default function ProductSale() {
  /**
   * States
   *
   * productColor:     [STATE] the color of the item
   * productQuantity:  [STATE] the number of items to add to the cart
   * sizeSelectorOpen: [STATE] whether our custom select element to pick the size is open or not
   * size:             [STATE] the size we've picked from our select element
   */
  const [productColor, setProductColor] = useState('black');
  const [productQuantity, setProductQuantity] = useState(1);
  const [sizeSelectorOpen, setSizeSelectorOpen] = useState(false);
  const [size, setSize] = useState('Size');
  return (
    <div className="Product Product__sale flex flex-column justify-center">
      <h3 className="Product__cost">$35.00</h3>
      {/* Product color selectors, normal buttons that */}
      {/* change the productColor state */}
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
      {/* The product quantity buttons, + and - to increase */}
      {/* and decrase the product quantity */}
      <ul className="Product__quantity-picker Product__options flex">
        <li className="Product__quantity">
          <button
            className="Product__quantity-button"
            onClick={() => {
              // We want to limit this, so there has to be at least
              // one item (doesnt make sense to add '0' items to a cart)
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
          {/* The size selector button, which opens up the selector element */}
          <button
            className={classnames("Product__size-button flex justify-between", {
              active: sizeSelectorOpen
            })}
            onClick={() => {
              setSizeSelectorOpen(!sizeSelectorOpen);
            }}
          >
            <span>{size}</span>
            <span className="Product__size-chevron">‹</span>
          </button>
        </li>
        {/* The size selector, with onClick events to switch the size */}
        {/* and close the size selector */}
        <ul className={classnames("Product__size-selector", {
          active: sizeSelectorOpen
        })}>
          <li className="Product__size-select">
            <button
              className="Product__size-select-button"
              onClick={() => {
                setSize('small');
                setSizeSelectorOpen(false);
              }}
            >small</button>
          </li>
          <li className="Product__size-select">
            <button
              className="Product__size-select-button"
              onClick={() => {
                setSize('medium');
                setSizeSelectorOpen(false);
              }}
            >medium</button>
          </li>
          <li className="Product__size-select">
            <button
              className="Product__size-select-button"
              onClick={() => {
                setSize('large');
                setSizeSelectorOpen(false);
              }}
            >large</button>
          </li>
        </ul>
      </ul>
      <div className="Product__question">
        <a href="#" className="Product__question-link">what's my size?</a>
      </div>
      <button className="Product__purchase">add to cart</button>
      <div className="Product__additional tc">
        <a href="#" className="Product__additional-link">build a cycle set and save up to 20%</a>
      </div>
      {/* Add a click event to the size selector overlay, */}
      {/* so that we close the size selector when we click anywhere outside of it */}
      <div
        className={classnames('Product__size-selector-overlay', {
          active: sizeSelectorOpen
        })}
        onClick={() => {
          setSizeSelectorOpen(false);
        }}
      ></div>
      {/* Lock scroll on the screen when we have the size selector size selector open */}
      {/* (this is for mobile only) */}
      {sizeSelectorOpen && <ScrollLockComponent />}
    </div>
  );
};
