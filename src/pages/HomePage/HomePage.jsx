import './HomePage.css';
import homeImage from '../../assets/images/home.jpg';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to Amazona!</h1>
      <img src={homeImage} alt="Welcome" />
      <p>Find the best products at unbeatable prices.</p>
    </div>
  );
};

export default HomePage;
