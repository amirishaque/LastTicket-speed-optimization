import React from "react";
import "./style/style.css";

function News() {
  return (
    <>
      <section className="news-wrapper">
        <div className="news-wrapper-inner">
          <h2>
            Join the <span>newsletter</span> to learn about future events
          </h2>
          <p>
            Join the newsletter to and get 10% discount on your first ticket
            purchase.
          </p>
          <div className="email-wrapper">
            <input type="email" placeholder="Enter Email Address" />
            <a href="#">Subscribe</a>
          </div>
        </div>
      </section>
    </>
  );
}

export default News;
