import { useState, useRef } from 'react';
import classnames from 'classnames';
import ScrollLockComponent from 'components/utils/scrollLockComponent';
import ProductDescription from 'components/modules/ProductDescription';
import ProductSale from 'components/modules/ProductSale';

export default function Hero() {
  const splashContainer = useRef(null);
  const [splashOpen, setSplashOpen] = useState(false);
  const [splashAnimate, setSplashAnimate] = useState(false);
  /**
   * Toggle the large image overlays
   */
  const toggleSplash = (e) => {
    // We have an "animation" screen which
    // just hides the images, so we don't
    // see any jumps happening
    setSplashAnimate(true);
    setSplashOpen(!splashOpen);
    if (e.target && !splashOpen) {
      const target = e.target;
      // We do a setTimeout because we need to wait a short
      // time before we can calculate where we should be
      // on the splash overlay (depending on which image
      // we clicked on to open it)
      setTimeout(() => {
        splashContainer.current.scrollTo(0, target.offsetTop);
        setSplashAnimate(false);
      }, 10);
    } else {
      setSplashAnimate(false);
    }
  }
  return (
    <article className="Hero">
      <div className="Container flex">
        <section className="Hero__inner Hero__inner--info">
          <ProductDescription />
        </section>
        <section
          ref={splashContainer}
          className={classnames("Hero__inner Hero__splash Hero__inner--splash", {
            active: splashOpen,
            animate: splashAnimate
          })}
          onClick={(e) => {
            toggleSplash(e);
          }}
        >
          <img className="Hero__splash-image" src="/images/top/highwaist_black_front_2_1024x1024.jpg"></img>
          <img className="Hero__splash-image" src="/images/top/highwaist_black_front_3_1024x1024.jpg"></img>
          <img className="Hero__splash-image" src="/images/top/highwaist_black_front_4_1024x1024.jpg"></img>
          <img className="Hero__splash-image" src="/images/top/highwaist_black_front_1024x1024.jpg"></img>
          <img className="Hero__splash-image" src="/images/top/highwaist_black_side_1024x1024.jpg"></img>
          <img className="Hero__splash-image" src="/images/top/highwaist_black_back_1024x1024.jpg"></img>
        </section>
        <section className="Hero__inner Hero__inner--cta">
          <ProductSale />
        </section>
      </div>
      {splashOpen && (
        <>
          <ScrollLockComponent />
          <button
            className="Hero__splash-close"
            onClick={() => {
              setSplashOpen(false);
            }}
          >✕</button>
        </>
      )}
    </article>
  );
};
