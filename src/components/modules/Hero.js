export default function Hero() {
  return (
    <article className="Hero">
      <div className="Container flex">
        <section className="Hero__inner Hero__inner--info">
          <div className="Hero__inner--centered flex flex-column justify-center">
            <h3>Information Here</h3>
          </div>
        </section>
        <section className="Hero__inner Hero__inner--splash">
          <img src="/images/top/highwaist_black_front_2_1024x1024.jpg"></img>
          <img src="/images/top/highwaist_black_front_3_1024x1024.jpg"></img>
          <img src="/images/top/highwaist_black_front_4_1024x1024.jpg"></img>
          <img src="/images/top/highwaist_black_front_1024x1024.jpg"></img>
          <img src="/images/top/highwaist_black_side_1024x1024.jpg"></img>
          <img src="/images/top/highwaist_black_back_1024x1024.jpg"></img>
        </section>
        <section className="Hero__inner Hero__inner--cta">
          <div className="Hero__inner--centered flex flex-column justify-center">
            <h3>Buy Stuff Here</h3>
          </div>
        </section>
      </div>
    </article>
  );
};
