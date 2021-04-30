import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import { isAdmin, isAuth } from '../utils.js';
import Project from '../models/projectModel.js';
import data from '../data.js'

const projectRouter = express.Router();

projectRouter.get(
    '/',
    expressAsyncHandler(async (req, res) => {
        const projects = await Project.find();
        res.send(projects);
    })
);

projectRouter.get(
    '/completed',
    expressAsyncHandler(async (req, res) => {
        const projects = await Project.find({ isCompleted: true });
        res.send(projects);
    })
);

projectRouter.get(
    '/ongoing',
    expressAsyncHandler(async (req, res) => {
        const projects = await Project.find({ isCompleted: false });
        res.send(projects);
    })
);

projectRouter.get(
    '/ids',
    expressAsyncHandler(async (req, res) => {
        const projects = await Project.find();
        const ids = [];
        for (var i = 0; i < projects.length; i++) {
            ids.push({ id: projects[i]._id});
        }
        res.send(ids);
    })
);

projectRouter.get(
    '/remove/all',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
        const projects = await Project.find();
        if (projects.length === 0) {
            res.status(404).send({message: 'No projects found'})
        } else {
            projects.forEach((project) => {
                project.remove();
            });
            res.send({message: 'All Projects have been deleted succussully'});
        }
    })
);

projectRouter.get(
    '/seed',
    expressAsyncHandler(async (req, res) => {
        const projects = data.projects.map((project) => ({
            ...project
        }));
        const createdProjects = await Project.insertMany(projects);
        res.send(createdProjects);
    })
);

projectRouter.post(
    '/',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
        const newProject = new Project({
            name: req.body.name,
            client: req.body.client,
            images: req.body.images || [],
            thumbnail: req.body.thumbnail,
            location: req.body.location || 'Kampala',
            description: req.body.location,
            contractor: req.body.contractor || 'UNIQUE PLUMBERS',
            remarks: req.body.remarks || 'No remarks',
            isCompleted: Boolean(req.body.isCompleted)
        });
        newProject.save();
        res.send({ message: 'Project Saved Successfully', project: newProject });
    })
);

projectRouter.put(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
        const projectId = req.params.id;
        const project = await Project.findById(projectId);
        if (project) {
            project.name = req.body.name || project.name;
            project.images = req.body.images || project.images;
            project.thumbnail = req.body.thumbnail || project.thumbnail;
            project.location = req.body.location || project.location;
            project.description = req.body.description || project.description;
            project.isCompleted = req.body.isCompleted || project.isCompleted; 
            project.contractor = req.body.contractor || project.contractor;
            project.remarks = req.body.remarks || project.remarks;
            project.client = req.body.client || project.client;
            project.save();
            res.send({ message: 'Project Updated Successfully', project: project });
        }
        res.status(500).send({ message: 'Project Update Failed' });
    })
);

projectRouter.delete(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
        const projectId = req.params.id;
        const project = await Project.findById(projectId);
        if (project) {
            project.remove()
            res.send({ message: 'Project Deleted Successfully' });
        }
        res.status(500).send({ message: 'Project Delete Failed' });
    })
);
projectRouter.get(
    '/:id',
    expressAsyncHandler(async (req, res) => {
        const projectId = req.params.id;
        const project = await Project.findById(projectId);
        if (project) {
            res.send(project);
        }
        res.status(500).send({ message: 'Project Not found' });
    })
);

export default projectRouter;