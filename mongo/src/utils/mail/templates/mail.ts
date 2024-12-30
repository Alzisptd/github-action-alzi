import nodemailer from "nodemailer";
import ejs from 'ejs';
import path from 'path';

// Membuat transporter menggunakan konfigurasi SMTP
const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",  // SMTP Host
    port: 465,              // Port untuk koneksi secure (SSL/TLS)
    secure: true,           // Menggunakan TLS/SSL
    auth: {
        user: "aljisaptiadi@gmail.com",  // Ganti dengan email pengirim yang valid
        pass: "Alji_TKJ1",               // Ganti dengan password yang valid
    },
    requireTLS: true,        // Memastikan penggunaan TLS
});

const send = async ({
    to,
    subject,
    content
}: {
    to : string | string[];
    subject: string;
    content:string;
}) => {
    const result = await transporter.sendMail({
        from: "alzisaptiadi@zohomail.com",
        to,
        subject,
        html: content,
    });

    console.log("Send Email to,to");
    return result;
};

const render = async (template: string,data: any) => {
     const content = await ejs.renderFile(
        path.join(__dirname, `${template}`),
        data
    );
    return content;
};

export default{
    send,
    render,
};