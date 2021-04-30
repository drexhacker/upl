import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, useParams } from 'react-router-dom';
import {
  createProject,
  deleteProject,
  listProjects,
} from '../actions/projectActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import NavBar from '../components/NavBar';
import SearchBox from '../components/SearchBox';
import {
  PROJECT_CREATE_RESET,
  PROJECT_DELETE_RESET,
} from '../constants/projectConstants';

export default function ProjectListScreen(props) {
  const { pageNumber = 1 } = useParams();

  const sellerMode = props.match.path.indexOf('/seller') >= 0;
  const projectList = useSelector((state) => state.projectList);
  const { loading, error, projects, page, pages } = projectList;

  const projectCreate = useSelector((state) => state.projectCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProject,
  } = projectCreate;

  const projectDelete = useSelector((state) => state.projectDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = projectDelete;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
      loading: loadingCategories,
      error: errorCategories,
      categories,
  } = productCategoryList;
  const dispatch = useDispatch();
  useEffect(() => {
    if (successCreate) {
      dispatch({ type: PROJECT_CREATE_RESET });
    }
    if (successDelete) {
      dispatch({ type: PROJECT_DELETE_RESET });
    }
    dispatch(
      listProjects({ seller: sellerMode ? userInfo._id : '', pageNumber })
    );
  }, [
    createdProject,
    dispatch,
    props.history,
    sellerMode,
    successCreate,
    successDelete,
    userInfo._id,
    pageNumber,
  ]);

  const deleteHandler = (project) => {
    if (window.confirm('Are you sure to delete?')) {
      dispatch(deleteProject(project._id));
    }
  };
  const createHandler = () => {
    props.history.push('/admin/projects/create');
  };
  return (
    <div>
      <NavBar isActive="#admin-nav" cartItems={cartItems} categories={categories} loadingCategories={loadingCategories} errorCategories={errorCategories}></NavBar>
      <main id="main">
        <section className="breadcrumbs">
          <div className="container">

            <div className="d-flex justify-content-between align-items-center">
              <h2>Projects Admin</h2>
              <Route
                render={({ history }) => (
                  <SearchBox history={history}></SearchBox>
                )}
              ></Route>
              <ol>
                <li><Link to="/admin">Admin</Link></li>
                <li>Projects</li>
              </ol>
            </div>

          </div>
        </section>
        <div className="row">
          <button type="button" className="btn btn-primary" onClick={createHandler}>
            Create Project
        </button>
        </div>

        {loadingDelete && <LoadingBox></LoadingBox>}
        {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}

        {loadingCreate && <LoadingBox></LoadingBox>}
        {errorCreate && <MessageBox variant="danger">{errorCreate}</MessageBox>}
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>CLIENT</th>
                  <th>LOCATION</th>
                  <th>DESCRIPTION</th>
                  <th>REMARKS</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr key={project._id}>
                    <td>{project._id}</td>
                    <td>{project.name}</td>
                    <td>{project.client}</td>
                    <td>{project.location}</td>
                    <td>{project.description}</td>
                    <td>{project.remarks}</td>
                    <td>
                      <Link to={"/project/" + project._id} className="btn btn-primary"><i className="bi bi-eye"></i></Link>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() =>
                          props.history.push(`/admin/project/${project._id}/edit`)
                        }
                      >
                        <i className="bi bi-pencil-square"></i>
                    </button>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => deleteHandler(project)}
                      >
                        <i className="bi bi-archive"></i>
                    </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="row center pagination">
              {[...Array(pages).keys()].map((x) => (
                <Link
                  className={x + 1 === page ? 'active' : ''}
                  key={x + 1}
                  to={`/admin/projects/pageNumber/${x + 1}`}
                >
                  {x + 1}
                </Link>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
