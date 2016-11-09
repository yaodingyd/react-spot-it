import React, { Component } from 'react';
import Header from './App/component/Header';


import './App/css/App.css';

class About extends Component {
  render() {
    return (
      <div>
        <Header />
        <h3> </h3>
        <h2>About the mathematicals of Spot-It</h1>
        <p>
            <a href="http://stackoverflow.com/questions/6240113/what-are-the-mathematical-computational-principles-behind-this-game">this post</a> and <a href="http://math.stackexchange.com/questions/36798/what-is-the-math-behind-the-game-spot-it"> this post</a> explain the principles of Spot-It pretty well.
        </p>
        <h2>About my implemention</h2>
        <p>Basically I'm implement <a hef="http://stackoverflow.com/a/6240662">this one</a>. And for some arbitrary values, I'm using brutal forces: Get all combinations first, and iterate through them to find the largest groups of subset that matches Spot-It.</p>
      </div>
    );
  }
}

export default About;