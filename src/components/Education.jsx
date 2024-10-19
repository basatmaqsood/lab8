import React, { useState } from 'react';

function Education() {
    const [name,setName] = useState('Basat Maqsood');
  return (
    <div className="education">
      <h2>Education</h2>
      <ul>
        <li>
          <strong> Bachelor in Software Engineering</strong> UET Taxila (2022-2026)
        </li>
        <li>
          <strong>ICS</strong> CMA College FatehPur (2018-2022)
        </li>
      </ul>
    </div>
  );
}

export default Education;
