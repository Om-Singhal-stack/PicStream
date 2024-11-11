import React from 'react';
import './Policy.css';


const PrivacyPolicy = () => {
  return (
    <div className="mainpolicy">
    <div className="privacy-policy">
      <h1>Privacy Policy</h1>
      <p>Last updated: {new Date().toLocaleDateString()}</p>
      
      <section>
        <h2>1. Introduction</h2>
        <p>Welcome to PicStream. This Privacy Policy outlines how we collect, use, and protect your information when you use our AI-based image generator application.</p>
      </section>

      <section>
        <h2>2. Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul>
          <li><strong>Personal Information:</strong> such as your name, email address, and any other information you provide when you contact us.</li>
          <li><strong>Usage Data:</strong> details on how you interact with our app, including pages visited, clicks, and image preferences.</li>
        </ul>
      </section>

      <section>
        <h2>3. How We Use Your Information</h2>
        <p>We use the information we collect for the following purposes:</p>
        <ul>
          <li>To improve the quality and functionality of our app</li>
          <li>To provide customer support</li>
          <li>To analyze and understand user preferences</li>
          <li>To ensure the security of our application</li>
        </ul>
      </section>

      <section>
        <h2>4. Sharing Your Information</h2>
        <p>We do not sell or rent your personal information to third parties. We may share your information only in the following situations:</p>
        <ul>
          <li>With service providers who help us operate the application</li>
          <li>To comply with legal obligations or respond to valid legal requests</li>
        </ul>
      </section>

      <section>
        <h2>5. Data Security</h2>
        <p>We implement reasonable security measures to protect your information. However, please note that no data transmission over the internet is completely secure.</p>
      </section>

      <section>
        <h2>6. Your Rights</h2>
        <p>You have the right to access, correct, or delete your personal information. If you wish to exercise these rights, please contact us at [Your Contact Email].</p>
      </section>

      {/* <section>
        <h2>7. Changes to This Privacy Policy</h2>
        <p>We may update our Privacy Policy periodically. Any changes will be posted on this page with an updated "Last Updated" date.</p>
      </section> */}

     
    </div>

    <div className="policyimg">
      <img src="policy1.jpg" alt="" />
    </div>
    </div>
  );
};

export default PrivacyPolicy;
