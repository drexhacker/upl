import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import express from 'express';
import nodemailer from 'nodemailer';
let fs = require("fs");
let ejs = require("ejs");
let pdf = require("html-pdf");
let path = require("path");
import expressAsyncHandler from 'express-async-handler';

const mailRouter = express.Router();

mailRouter.post(
    "/generateApplication",
    expressAsyncHandler(async (req, res) => {
        var __dirname = path.resolve();
        ejs.renderFile(path.join(__dirname, './views/', "intern-template.ejs"), { fullname: req.body.fullname, email: req.body.email, address: req.body.address, city: req.body.city, country: req.body.country }, (err, data) => {
            if (err) {
                res.send(err);
            } else {
                let options = {
                    "height": "11.25in",
                    "width": "8.5in",
                    "header": {
                        "height": "20mm",
                    },
                    "footer": {
                        "height": "20mm",
                    },
                };
                pdf.create(data, options).toFile("frontend/temps/" + req.body.fullname.replace(/\s/g, '') + ".pdf", async (err, data) => {
                    if (err) {
                        res.status(500).send(err);
                    } else {
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
                            const generatedForm = "https://smartplumbers.xifair.shop/api/files?filename=" + req.body.fullname.replace(/\s/g, '') + ".pdf";
                            const bodyMessage = 'Hello ' + req.body.fullname + ',\nCongratulations, Your intership application has been submitted successfully. You will be contacted as soon as possible for more information. \n Thank You for using Our services!\n\nRegards Smart Plumbers Team';
                            const info = await transporter.sendMail({
                                from: '"Smart Plumbers 👨‍🔧" <smartplumbers@drexsoft.xyz>', // sender address
                                to: "admin@drexsoft.xyz, abasimuks@gmail.com, " + req.body.email, // list of receivers
                                subject: "SMART PLUMBERS INTERNSHIP", // Subject line
                                text: bodyMessage, // html body
                            });
                            res.send({ message: "Application Filled Successfully", link: generatedForm, info });
                        } catch (error) {
                            res.status(500).send(error);
                        }
                    }
                });
            }
        });
    })
);
mailRouter.post(
    '/send',
    expressAsyncHandler(async (req, res) => {
        try {
            const transporter = nodemailer.createTransport({
                host: "mail.drexsoft.xyz",
                port: 587,
                secure: false,
                auth: {
                    user: "upl@drexsoft.xyz",
                    pass: "Password@2020",
                },
            });
            const info = await transporter.sendMail({
                from: '"UNIQUE PLUMBERS UGANDA LTD" <upl@drexsoft.xyz>', // sender address
                to: "admin@drexsoft.xyz, uniqueplumbersug@gmail.com", // list of receivers
                subject: "Web Contact: " + req.body.subject, // Subject line
                text: "CONTACT MESSAGE FROM "+ req.body.name + "\n" + req.body.message, // plain text body
            });
            res.send({ message: 'Message Sent Successully', info });
        } catch (error) {
            res.status(500).send(error);
        }

    })
);

export default mailRouter;