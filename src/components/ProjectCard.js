import React from 'react';

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <div className="proj-imgbx" onClick={() => window.location.href = link} style={{ cursor: 'pointer' }}>
      <img src={imgUrl} alt={title} />
      <div className="proj-txtx">
        <h4>{title}</h4>
        <span>{description}</span>
      </div>
    </div>
  );
};
