import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import { isAdmin, isAuth } from '../utils.js';
import Service from '../models/serviceModel.js';
import data from '../data.js';

const serviceRouter = express.Router();

serviceRouter.get(
    '/',
    expressAsyncHandler(async (req, res) => {
        const services = await Service.find();
        res.send(services);
    })
);

serviceRouter.get(
    '/remove',
    expressAsyncHandler(async (req, res) => {
        const services = await Service.find();
        services.forEach(async (service) => {
            await service.remove();
        });
        res.send({ message: 'Removed' });
    })
);

serviceRouter.get(
    '/seed',
    expressAsyncHandler(async (req, res) => {
        const services = data.services.map((service) => ({
            ...service
        }));
        const createdServices = await Service.insertMany(services);
        res.send(createdServices);
    })
);

serviceRouter.post(
    '/',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
        const newService = new Service({
            name: req.body.name,
            image: req.body.image,
            description: req.body.description
        });
        newService.save();
        res.send({ message: 'Service Created Successfully', service: newService });
    })
);

serviceRouter.put(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
        const serviceId = req.params.id;
        const service = await Service.findById(serviceId);
        if (service) {
            service.name = req.body.name;
            service.image = req.body.image;
            service.description = req.body.description;
            service.save()
            res.send({ message: 'Service Updated Successfully', service: service });
        }
        res.status(500).send({ message: 'Service Update Failed' });
    })
);


serviceRouter.get(
    '/:id',
    expressAsyncHandler(async (req, res) => {
        const serviceId = req.params.id;
        const service = await Service.findById(serviceId);
        if (service) {
            res.send(service);
        }
        res.status(500).send({ message: 'Service not found' });
    })
);

serviceRouter.delete(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
        const serviceId = req.params.id;
        const service = await Service.findById(serviceId);
        if (service) {
            service.remove()
            res.send({ message: 'Service Deleted Successfully' });
        }
        res.status(500).send({ message: 'Service Delete Failed' });
    })
);

export default serviceRouter;