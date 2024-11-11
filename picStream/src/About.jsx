
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Our PicStream</h1>
        <p>
          Welcome to our PicStream ! Our web application harnesses the power of artificial intelligence to create stunning, unique images with just the click of a button. Whether you're looking for inspiration, abstract art, or just want to explore AI-generated visuals, you're in the right place.
        </p>
        {/* <h2>How It Works</h2>
        <p>
          Our AI model is designed to generate high-quality images based on a range of parameters. The process is simple: users can either specify details about the images they want or let the AI surprise them with completely random creations. Every image generated is unique, making this a fun and creative tool for artists, designers, and curious minds alike.
        </p> */}

<h2 className='about_h2'>How to Use</h2>
       <p>
         Using the Picstream is simple:
       </p>
     <ol>
         <li>Click the "Generate Now" button on the homepage.</li>
         <li>A random image will appear based on input the prompt.</li>
         <li>Input the how many no of images.</li>
         <li>Click again to generate another image!</li>
       </ol>
        <h2>Why Choose Us?</h2>
        <ul className='choose'>
          <li>State-of-the-art AI model for generating random images</li>
          <li>Easy-to-use interface</li>
          <li>Responsive and lightweight design</li>
          <li>Endless possibilities for image generation</li>
          <li>Completely free to use</li>
        </ul>
      </div>
      <div className="about-image">
        <img src="aboutimg2.webp" alt="AI generated artwork" />
      </div>
 


    </div>
  );
};

export default About;
