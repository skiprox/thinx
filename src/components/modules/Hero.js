import ProductDescription from 'components/modules/ProductDescription';
import ProductSale from 'components/modules/ProductSale';

export default function Hero() {
  return (
    <article className="Hero">
      <div className="Container flex">
        <section className="Hero__inner Hero__inner--info">
          <ProductDescription />
        </section>
        <section className="Hero__inner Hero__inner--splash">
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
    </article>
  );
};
