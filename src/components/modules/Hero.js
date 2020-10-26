import { useState, useRef } from 'react';
import classnames from 'classnames';
import ScrollLockComponent from 'components/utils/scrollLockComponent';
import ProductDescription from 'components/modules/ProductDescription';
import ProductSale from 'components/modules/ProductSale';

export default function Hero() {
  /**
   * Refs and States
   *
   * splashContainer:  [REF] the container with all the images in it
   * splashOpen:       [STATE] whether the images container is full screen fixed
   * splashAnimate:    [STATE] whether we are currently opening or closing the splash container fixed state
   */
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
            // Clicking anywhere on the splash area opens it full screen
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
        {/* mobile, presentation only: */}
        {/* bullets (i guess to indicate that there are additional images??) */}
        <ul className="Hero__splash-bullets flex justify-center items-center">
          <li className="Hero__splash-bullet active"></li>
          <li className="Hero__splash-bullet"></li>
          <li className="Hero__splash-bullet"></li>
          <li className="Hero__splash-bullet"></li>
          <li className="Hero__splash-bullet"></li>
          <li className="Hero__splash-bullet"></li>
        </ul>
        <section className="Hero__inner Hero__inner--cta">
          <ProductSale />
        </section>
      </div>
      {/* if the splash is open we want to prevent scrolling on rest of the page */}
      {/* and also show a close button */}
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
