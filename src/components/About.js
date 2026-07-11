const About = () => {
  return (
    <section className="about-page">
      <div className="about-card">
        <p className="about-card__eyebrow">About Better Swiggy</p>

        <h1 className="about-card__title">
          A food delivery app built for faster cravings and simpler choices.
        </h1>

        <p className="about-card__description">
          Better Swiggy is your neighborhood-friendly food delivery experience.
          We bring restaurants, quick discovery, and smooth ordering together in
          one clean place.
        </p>

        <div className="about-card__stats">
          <div className="about-stat">
            <span className="about-stat__value">100+</span>
            <span className="about-stat__label">curated restaurants</span>
          </div>
          <div className="about-stat">
            <span className="about-stat__value">30 min</span>
            <span className="about-stat__label">delivery mindset</span>
          </div>
          <div className="about-stat">
            <span className="about-stat__value">1 app</span>
            <span className="about-stat__label">for food cravings</span>
          </div>
        </div>

        <div className="about-card__grid">
          <article className="about-feature">
            <h2 className="about-feature__title">Simple discovery</h2>
            <p className="about-feature__text">
              Browse restaurants quickly with a clean interface designed to get
              you from scroll to order in fewer steps.
            </p>
          </article>

          <article className="about-feature">
            <h2 className="about-feature__title">
              Built for local food lovers
            </h2>
            <p className="about-feature__text">
              We focus on great food, familiar options, and a smooth experience
              that feels easy from the first click.
            </p>
          </article>

          <article className="about-feature">
            <h2 className="about-feature__title">Made to scale</h2>
            <p className="about-feature__text">
              Better Swiggy is designed as a strong foundation for features like
              filtering, search, cart, and personalized recommendations.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
