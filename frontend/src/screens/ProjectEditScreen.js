import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';
import { detailsProject, updateProject } from '../actions/projectActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { PROJECT_UPDATE_RESET } from '../constants/projectConstants';
import NavBar from '../components/NavBar';
import { Route } from 'react-router';
import SearchBox from '../components/SearchBox';
import { Link } from 'react-router-dom';

export default function ProjectEditScreen(props) {
  const projectId = props.match.params.id;
  const [name, setName] = useState('');
  const [images, setImages] = useState(['']);
  const [thumbnail, setThumbnail] = useState('');
  const [remarks, setRemarks] = useState('');
  const [client, setClient] = useState('');
  const [location, setLocation] = useState('');
  const [contractor, setContractor] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  const [description, setDescription] = useState('');

  const projectDetails = useSelector((state) => state.projectDetails);
  const { loading, error, project } = projectDetails;

  const projectUpdate = useSelector((state) => state.projectUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = projectUpdate;

  const dispatch = useDispatch();
  useEffect(() => {
    if (successUpdate) {
      props.history.push('/admin/projects');
    }
    if (!project || project._id !== projectId || successUpdate) {
      dispatch({ type: PROJECT_UPDATE_RESET });
      dispatch(detailsProject(projectId));
    } else {
      setName(project.name);
      setRemarks(project.remarks);
      setClient(project.client);
      setImages(project.images);
      setLocation(project.location);
      setThumbnail(project.thumbnail);
      setIsCompleted(project.isCompleted);
      setContractor(project.contractor);
      setDescription(project.description);
    }
  }, [project, dispatch, projectId, successUpdate, props.history]);
  const submitHandler = (e) => {
    e.preventDefault();
    // TODO: dispatch update product
    dispatch(
      updateProject({
        _id: projectId,
        name,
        images,
        contractor,
        client,
        thumbnail,
        location,
        isCompleted,
        remarks,
        description,
      })
    );
  };
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState('');

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('image', file);
    setLoadingUpload(true);
    try {
      const { data } = await Axios.post('/api/uploads', bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      setImages([data]);
      setThumbnail(data);
      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
  };

  return (
    <div>
      <NavBar isActive="#admin-nav" cartItems={cartItems} categories={categories} loadingCategories={loadingCategories} errorCategories={errorCategories}></NavBar>
      <main id="main">
        <section className="breadcrumbs">
          <div className="container">

            <div className="d-flex justify-content-between align-items-center">
              <h2>Project Edit</h2>
              <Route
                render={({ history }) => (
                  <SearchBox history={history}></SearchBox>
                )}
              ></Route>
              <ol>
                <li><Link to="/">Admin</Link></li>
                <li><Link to="/admin/projects">Projects</Link></li>
                <li>Edit</li>
              </ol>
            </div>

          </div>
        </section>
        <section className="innerpage">
          <div className="container">

            <center>
              <form className="form" onSubmit={submitHandler}>
                {loadingUpdate && <LoadingBox></LoadingBox>}
                {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>}
                {loading ? (
                  <LoadingBox></LoadingBox>
                ) : error ? (
                  <MessageBox variant="danger">{error}</MessageBox>
                ) : (
                  <>
                  <div>
                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      type="text"
                      className="form-control"
                      placeholder="Enter name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    ></input>
                  </div>
                    <div>
                      <label htmlFor="client">Client</label>
                      <input
                        id="client"
                        type="text"
                        className="form-control"
                        placeholder="Enter Client"
                        value={client}
                        onChange={(e) => setClient(e.target.value)}
                      ></input>
                    </div>
                    <div>
                      <label htmlFor="contractor">Contractor</label>
                      <input
                        id="contractor"
                        type="text"
                        className="form-control"
                        placeholder="Enter Contractor"
                        value={contractor}
                        onChange={(e) => setContractor(e.target.value)}
                      ></input>
                    </div>
                    <div>
                      <label htmlFor="remarks">Remarks</label>
                      <input
                        id="remarks"
                        type="text"
                        className="form-control"
                        placeholder="Enter remarks"
                        value={remarks}
                        onChange={(e) => setRemarks(e.target.value)}
                      ></input>
                    </div>
                    <div>
                      <label htmlFor="location">Location</label>
                      <input
                        id="location"
                        type="text"
                        className="form-control"
                        placeholder="Enter Location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                      ></input>
                    </div>
                    <div>
                      <label htmlFor="thumbnail">Thumbnail</label>
                      <input
                        id="thumbnail"
                        type="text"
                        className="form-control"
                        placeholder="Select thumbnail below"
                        value={thumbnail}
                        onChange={(e) => setThumbnail(e.target.value)}
                      ></input>
                    </div>
                    <div>
                      <label htmlFor="imageFile">Thumbnail File</label>
                      <input
                        type="file"
                        id="imageFile"
                        className="form-control"
                        label="Choose Image"
                        onChange={uploadFileHandler}
                      ></input>
                      {loadingUpload && <LoadingBox></LoadingBox>}
                      {errorUpload && (
                        <MessageBox variant="danger">{errorUpload}</MessageBox>
                      )}
                    </div>
                    <div>
                      <label htmlFor="description">Description</label>
                      <textarea
                        id="description"
                        rows="3"
                        type="text"
                        className="form-control"
                        placeholder="Enter description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      ></textarea>
                    </div>
                    <div>
                      <label htmlFor="isCompleted">Is Completed</label>
                      <input
                        id="isCompleted"
                        type="checkbox"
                        checked={isCompleted}
                        value={isCompleted}
                        onChange={(e) => setIsCompleted(e.target.checked)}
                      ></input>
                    </div>
                    <br />
                    <div>
                      <label></label>
                      <button className="btn btn-primary w-100" type="submit">
                        Update Project
                      </button>
                    </div>
                    <br />
                  </>
                )}
              </form>
            </center>
          </div>
        </section>
      </main>
    </div>
  );
}
