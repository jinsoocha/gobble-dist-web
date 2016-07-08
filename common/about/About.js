import React from 'react';
import MainLayoutContainer from './../main-layout/MainLayoutContainer';

const About = () => (
  <MainLayoutContainer>
    <div className="about">
      <div className="intro">
        <font size="60" className="title"><strong>GOBBLE</strong> it and discover what it means to you</font>
        <h1>Gobble is a community where people share what they eat.<br />Curious about how healthy your food is? Wanna know how other people like it?</h1>
        <h1>Start <strong>gobbling</strong> today!</h1>
      </div>
      <div className="images">
        <a href="https://github.com/jackrzhang">
          <img role="presentation" src="https://avatars2.githubusercontent.com/u/12771126?v=3&s=400" width="250" height="250" />
          <h2>Jack Zhang</h2>
        </a>
        <a href="https://github.com/jinsoocha">
          <img role="presentation" src="https://avatars3.githubusercontent.com/u/17713849?v=3&s=400" width="250" height="250" />
          <h2>Jinsoo Cha</h2>
        </a>
        <a href="https://github.com/leoadelstein">
          <img role="presentation" src="https://avatars1.githubusercontent.com/u/6300455?v=3&s=400" width="250" height="250" />
          <h2>Leo Adelstein</h2>
        </a>
        <a href="https://github.com/willwtang">
          <img role="presentation" src="https://avatars0.githubusercontent.com/u/17257262?v=3&s=400" width="250" height="250" />
          <h2>Will Tang</h2>
        </a>
      </div>
      <div>
        <h1>Gobble is a team of four full stack engineers in San Francisco.</h1>
        <h2>Check out our github and feel free to send any feedback!</h2>
      </div>
    </div>
  </MainLayoutContainer>
);

export default About;
