import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import Img from 'react-cool-img';

export default function ProjectOn(props) {
  const { project } = props;
  return (
    <div className="col-lg-4 col-md-6 projects-item filter-ongoing">
      <div className="projects-wrap">
        <Img src={project.thumbnail} className="img-fluid" alt="" style={{ backgroundColor: 'grey', width: '480', height: '320' }} />
        <div className="projects-info">
          <h4><Link to={"/projects/" + project._id}>{project.name}</Link></h4>
          <p>On Going</p>
          <div>
            <a href={project.thumbnail} data-gallery="portfolioGallery" title="App 1" className="projects-lightbox link-preview"><i className="bi bi-plus"></i></a>
            <Link to={"/projects/" + project._id} className="link-details" title="More Details"><i className="bi bi-link"></i></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
