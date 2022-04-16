const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    host: process.env.HOST_EMAIL,
    port: process.env.PORT_EMAIL,
    secure: false,
    auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.PASS_EMAIL,
    },
    tls: {
        rejectUnauthorized: false,
    },
});

const sendEmail = async (user) => {
    try {
        const { name, email, password } = user;
        const send = await transporter.sendMail({
            text: `
                Olá ${name}, seu cadastro foi efetuado com sucesso!\n
                E-mail: ${email}\n
                Senha: ${password}
            `,
            subject: 'Cadastro To-Do List',
            from: `TESTE TÉCNICO <${process.env.USER_EMAIL}>`,
            to: [`${email}`],
        });
        console.log(send);
    } catch (err) {
        console.log(err);
    }
};

module.exports = { sendEmail };