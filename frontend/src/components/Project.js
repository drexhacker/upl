import React from 'react';

export default function Project(props) {
    const { project } = props;
    return (
        <div className="card col-lg-4 col-md-6" key={project._id}>
            <img className="card-img-top" src={project.thumbnail} alt={project.name} />
            <div className="card-body">
                <h4 className="card-title">{project.name}</h4>
                <p className="card-text">{project.remarks}</p>
                <a href={"/project/" + project._id} className="btn btn-primary">See Details</a>
            </div>
        </div>
    );
}
