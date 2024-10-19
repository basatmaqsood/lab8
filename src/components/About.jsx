import React from 'react';

function About({ username }) {
  return (
    <div className="about">
      <h2>About Me</h2>
      <p><strong>Name: </strong>{username}</p>
      <p><strong>Profession: </strong>Software Engineer</p>
      <p><strong>Contact: </strong>itzbasatmqasood@gmail.com</p>
      <p><strong>Phone: </strong>03078776306</p>
    </div>
  );
}

export default About;
