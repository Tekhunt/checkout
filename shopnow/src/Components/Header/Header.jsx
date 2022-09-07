import React from "react";

export const Header = () => {
  return (
    <header>
      <div class="logo">
        <img src="https://i.postimg.cc/7LFgncR4/fox.png" alt="logo" />
        <h2>Learner</h2>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">Teachers</a>
          </li>
          <li>
            <a href="#">Courses</a>
          </li>
          <li>
            <a href="#">Scholorship</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
        </ul>
      </nav>
      <div class="sign-in-btn">
        <a href="#" class="btn">
          Sign up
        </a>
        <div class="icon" onclick="menufun()">
          <i class="fa-solid fa-bars"></i>
        </div>
      </div>
    </header>
  );
};
