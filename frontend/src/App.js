import React from "react";
import axios from "axios";
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
// import Home component
import Home from "./homepage/home";
// import About component
import About from "./about/about";
// import ContactUs component
import BlogPostIndex from "./components";
// import community component
import Community from "./community/community";
import Contact from "./contact/contact";
import Podcast from "./podcast/podcast";
import Resources from "./resources/resources";
axios.defaults.baseURL = process.env.REACT_APP_API_URL


function App() {
    return (
      <>
        {/* This is the alias of BrowserRouter i.e. Router */}
        <Router>
          <Routes>
            {/* This route is for home component 
            with exact path "/", in component props 
            we passes the imported component*/}
            <Route path="/" element={<Home />} /> 

              
            {/* This route is for about component 
            with exact path "/about", in component 
            props we passes the imported component*/}
            <Route path="/about" element={<About />} />
              
            {/* This route is for index component
            with exact path "/index", in 
            component props we passes the imported component*/}
            <Route path="/index" element={<BlogPostIndex />} />

            {/* This route is for community component
            with exact path "/community", in
            component props we passes the imported component*/}
            <Route path="/community" element={<Community />} />
            {/* If any route mismatches the upper 
            route endpoints then, redirect triggers 
            and redirects app to home component with to="/" */}
            <Route path="*" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/podcast" element={<Podcast />} />
              <Route path="/resources" element={<Resources />} />

          </Routes>
        </Router>
      </>
    );
  }
    
  export default App;