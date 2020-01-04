const {Router} = require('express')
const validator = require('validator');
const request = require('request');
const nodemailer = require('nodemailer');

module.exports.form = async (req, res) => {
    if (!req.body.recaptchaToken) {
        return res.status(400).json({ message: "recaptchaToken is required" });
    } else {
        const verifyCaptchaOptions = {
            uri: "https://www.google.com/recaptcha/api/siteverify",
            json: true,
            form: {
                secret: '6LdpKckUAAAAAFOJ1mWmlqjpCocapb8QIej5NVTL',
                response: req.body.recaptchaToken
            }
        };
        request.post(verifyCaptchaOptions, function (err, response, body) {
            if (err) {
                return res.status(500).json({ message: "oops, something went wrong on our side" });
            }

            if (!body.success) {
                return res.status(500).json({ message: body["error-codes"].join(".") });
            }

            if (res.status(201)) {
                if (validator.isEmail(req.body.email)) {
                    if (validator.isMobilePhone(req.body.phone)) {
                        if (validator.isAlpha(req.body.name)) {
                            const cart = req.body.cart
                            const products = []
                            const tag = () => {
                                cart.forEach(element => {
                                    products.push(`<ul>
                                                    <li>${element.title}</li> 
                                                    <li>${element.price}</li>
                                                    <li>${element.selectNumbers} pc.</li>
                                                    </ul>
                                                    `)
                                });
                            }
                            tag()
                            const output = `
                            <p>Заявка на покупку SUPERDRONE</p>
                            <h3>Детали</h3>
                            <ul>
                            <li>Имя: ${req.body.name}</li>
                            <li>Почта: ${req.body.email}</li>
                            <li>Телефон: ${req.body.phone}</li>
                            <li>Продукты: ${products}</li>`

                            let smtpTransport;

                            try {
                                smtpTransport = nodemailer.createTransport({
                                    host: 'smtp.mail.ru',
                                    port: 465,
                                    secure: true,
                                    auth: {
                                        user: "ckotieika@mail.ru",
                                        pass: "Iron1996"
                                    }
                                });
                            } catch (e) {
                                let message = false;
                                console.log(`error ${e}`)
                            }

                            let mailOptions = {
                                from: 'ckotieika@mail.ru',
                                to: 'nosoff.slawa@yandex.ru',
                                subject: 'Заказ на SUPERDRONE',
                                text: 'Заказ на SUPERDRONE',
                                html: output
                            };

                            smtpTransport.sendMail(mailOptions, (error, info) => {
                                if (error) {
                                    console.log(' smtpTransport.sendMail error')
                                } else {
                                    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
                                    return res.status(200).json({ message: "recaptcha and form ok" });
                                }
                            })
                        } else {
                            return res.status(400).json({ message: "Name error" });
                        }
                    } else {
                        return res.status(400).json({ message: "Phone error" });
                    }
                } else {
                    return res.status(400).json({ message: "Email error" });
                }
            }
        })
         
    }
}