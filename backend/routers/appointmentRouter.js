import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Appointment from '../models/appointmentModel.js';
import { isAdmin, isAuth } from '../utils.js';

const appointmentRouter = express.Router();

appointmentRouter.get(
    '/',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
        const appointments = await Appointment.find();
        res.send(appointments);
    })
);

appointmentRouter.get(
    '/mine',
    isAuth,
    expressAsyncHandler(async (req, res) => {
        const user = req.user._id;
        const appointments = await Appointment.find({ user: user }).populate('service');
        if (appointments.length === 0) {
            res.status(404).send({ message: 'You dont have any appointments' });
        } else {
            res.send(appointments);
        }
    })
);

appointmentRouter.post(
    '/',
    isAuth,
    expressAsyncHandler(async (req, res) => {
        const user = req.user._id;
        const service = req.body.service;
        const newAppointment = new Appointment({ user: user, service: service });
        const appointment = await newAppointment.save();
        try {
            const transporter = nodemailer.createTransport({
                host: "mail.drexsoft.xyz",
                port: 587,
                secure: false,
                auth: {
                    user: "smartplumbers@drexsoft.xyz",
                    pass: "Password@2020",
                },
            });
            const bodyMessage = 'Hello ' + req.user.name + ',\nCongratulations, Your appointment has been submitted successfully. You will be contacted as soon as possible for more information. \n Thank You for using Our services!\n\nRegards Smart Plumbers Team';
            const info = await transporter.sendMail({
                from: '"Smart Plumbers 👨‍🔧" <smartplumbers@drexsoft.xyz>', // sender address
                to: "admin@drexsoft.xyz, abasimuks@gmail.com, " + req.user.email, // list of receivers
                subject: "SMART PLUMBERS APPOINTMENT", // Subject line
                text: bodyMessage, // html body
            });
            res.send({ message: 'Apointment Made Successfully', appointment: appointment, info });
        } catch (error) {
            res.status(500).send(error);
        }
    })
);

appointmentRouter.put(
    '/:id',
    isAuth,
    expressAsyncHandler(async (req, res) => {
        const appointment = await Appointment.findById(req.params.id);
        if (appointment) {
            appointment.updatedAt = req.body.date;
            appointment.save();
            res.send({ message: 'Apointment Changed Successfully', appointment: appointment });
        } else {
            res.status(404).send({ message: 'Appointment not found' });
        }

    })
);


export default appointmentRouter;
