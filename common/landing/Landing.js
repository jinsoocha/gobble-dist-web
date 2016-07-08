import React from 'react';
import MainLayoutContainer from './../main-layout/MainLayoutContainer';

const Landing = () => (
  <MainLayoutContainer>
    <h1 className="gobbleTitle">Welcome to Gobble!</h1>
    <div className="gobbleLandingLink"><a href="/login">Get Started for FREE</a></div>
    <img className="gobbleGrapes" src="/images/grapes.png" alt="grapes" height="650" width="750" />
  </MainLayoutContainer>
);

export default Landing;
