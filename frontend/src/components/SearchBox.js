import React, { useState } from 'react';

export default function SearchBox(props) {
  const [name, setName] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    props.history.push(`/search/name/${name}`);
  };
  return (
    <form className="search" onSubmit={submitHandler}>
      <div className="p-1 bg-light rounded rounded-pill shadow-sm">
        <div className="input-group">
          <input type="search" placeholder="Searching for products?" aria-describedby="button-addon1" className="form-control border-0 bg-light" name="q" id="q" onChange={(e) => setName(e.target.value)} />
          <div className="input-group-append">
            <button id="button-addon1" type="submit" className="btn btn-link text-primary"><i className="bi bi-search"></i></button>
          </div>
        </div>
      </div>
    </form>
  );
}
