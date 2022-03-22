import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/login">Log In</Link>
      <Link to="/signup">Sign Up</Link>

      <h1>Home Page</h1>
      <h2>About</h2>
      <p>Some information about this app</p>
    </div>
  );
};

export default Home;
