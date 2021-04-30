import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, useParams } from 'react-router-dom';
import { listProductCategories } from '../actions/productActions';
import { listCompletedProjects } from '../actions/projectActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import NavBar from '../components/NavBar';
import Project from '../components/Project';
import SearchBox from '../components/SearchBox';

export default function CompletedProjectsScreen(props) {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const { cartItems, error } = cart;
    const productCategoryList = useSelector((state) => state.productCategoryList);
    const {
        loading: loadingCategories,
        error: errorCategories,
        categories,
    } = productCategoryList;
    const projectListCompleted = useSelector((state) => state.projectListCompleted);
    const {
      loading: loadingCompletedProjects,
      error: errorCompletedProjects,
      completedProjects,
    } = projectListCompleted;
    useEffect(() => {
        dispatch(listProductCategories());
        dispatch(listCompletedProjects());
    }, [dispatch]);

    return (
        <div>
            <NavBar isActive="#projects-nav" cartItems={cartItems} categories={categories} loadingCategories={loadingCategories} errorCategories={errorCategories}></NavBar>
            <main id="main">
                <section className="breadcrumbs">
                    <div className="container">

                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Completed Projects</h2>
                            <Route
                                render={({ history }) => (
                                    <SearchBox history={history}></SearchBox>
                                )}
                            ></Route>
                            <ol>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/projects">Projects</Link></li>
                                <li><Link to="/projects/completed" >Completed</Link></li>
                            </ol>
                        </div>

                    </div>
                </section>
                <section id="projects" className="clearfix">
                    <div className="container" data-aos="fade-up">
                        {
                            loadingCompletedProjects ? (<LoadingBox></LoadingBox>) :
                                errorCompletedProjects ? (<MessageBox variant="danger">Projects Not Found</MessageBox>)
                                    : (
                                        <>
                                            <div className="row projects-container" data-aos="fade-up" data-aos-delay="200">
                                                {completedProjects.length === 0 && (<MessageBox>No Projects Found</MessageBox>)}
                                                {completedProjects.map((project) =>
                                                <Project project={project}></Project>
                                                )}
                                            </div>
                                        </>
                                    )
                        }

                    </div>
                </section>

            </main>
        </div>
    );
}
