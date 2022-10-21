import musicIcon from '../assets/images/icon-music.svg';

const Plan = () => (
  <section className="plan container">
    <img
      className="plan-icon"
      src={musicIcon}
      alt="music icon"
    />

    <div className="plan-info">
      <h2 className="plan-type">Annual Plan</h2>
      <p className="plan-price">$59.99/year</p>
    </div>

    <a
      className="plan-link"
      href="https://www.frontendmentor.io/profile/iamindika"
      target="_blank"
      rel="noopener noreferrer"
    >Change</a>
  </section>
);

export default Plan;