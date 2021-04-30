import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, useParams } from 'react-router-dom';
import { listProductCategories, listProducts } from '../actions/productActions';
import { listProjects } from '../actions/projectActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import NavBar from '../components/NavBar';
import Product from '../components/Product';
import Project from '../components/Project';
import ProjectOn from '../components/Project-on';
import Rating from '../components/Rating';
import SearchBox from '../components/SearchBox';
import { prices, ratings } from '../utils';

export default function ProjectsScreen(props) {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const { cartItems, error } = cart;
    const productCategoryList = useSelector((state) => state.productCategoryList);
    const {
        loading: loadingCategories,
        error: errorCategories,
        categories,
    } = productCategoryList;
    const projectList = useSelector((state) => state.projectList);
    const {
      loading: loadingProjects,
      error: errorProjects,
      projects,
    } = projectList;
    useEffect(() => {
        dispatch(listProductCategories());
        dispatch(listProjects());
    }, [dispatch]);

    return (
        <div>
            <NavBar isActive="#projects-nav" cartItems={cartItems} categories={categories} loadingCategories={loadingCategories} errorCategories={errorCategories}></NavBar>
            <main id="main">
                <section className="breadcrumbs">
                    <div className="container">

                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Projects</h2>
                            <Route
                                render={({ history }) => (
                                    <SearchBox history={history}></SearchBox>
                                )}
                            ></Route>
                            <ol>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/projects">Projects</Link></li>
                            </ol>
                        </div>

                    </div>
                </section>
                <section id="projects" className="clearfix">
                    <div className="container" data-aos="fade-up">
                        {
                            loadingProjects ? (<LoadingBox></LoadingBox>) :
                                errorProjects ? (<MessageBox variant="danger"></MessageBox>)
                                    : (
                                        <>
                                            <div className="row" data-aos="fade-up" data-aos-delay="100">
                                                <div className="col-lg-12">
                                                    <ul id="projects-flters">
                                                        <li data-filter="*" className="filter-active">All</li>
                                                        <li data-filter=".filter-completed">Completed</li>
                                                        <li data-filter=".filter-ongoing">Ongoing</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="row projects-container" data-aos="fade-up" data-aos-delay="200">
                                                {projects.length === 0 && (<MessageBox>No Projects Found</MessageBox>)}
                                                {projects.map((project) =>
                                                (project.isCompleted === true ? (
                                                    <Project project={project}></Project>
                                                ) :
                                                    <ProjectOn project={project}></ProjectOn>
                                                ))}
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
