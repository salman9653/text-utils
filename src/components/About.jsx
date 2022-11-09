import React from 'react';

const About = (props) => {
  return (
    <div style={{ color: props.mode === 'dark' && 'white' }} >
      <h1>About</h1>
    </div>
  )
}

export default About;
