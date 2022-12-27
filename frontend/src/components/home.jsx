import React from "react";
import { Link } from "react-router-dom";
import ResponsiveAppBar from "./header";


  
const Home = () => {
  return (
    <div>
        <ResponsiveAppBar pageTitle="Home" />

      <h1>Home Page</h1>
      <br />
      <ul>
        <li>
          {/* Endpoint to route to Home component */}
          <Link to="/">Home</Link>
        </li>
        <li>
          {/* Endpoint to route to Home component */}
          <Link to={"./index"}>Show Notes</Link>
        </li>
        <li>
          {/* Endpoint to route to About component */}
          <Link to="/about">About</Link>
        </li>
        <li>
          {/* Endpoint to route to Contact Us component */}
          <Link to="/contactus">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};
  
export default Home;