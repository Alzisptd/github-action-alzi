import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

export const CLOUDINARY_API_KEY: string = process.env.CLOUDINARY_API_KEY || "";
export const CLOUDINARY_API_SECRET: string =
  process.env.CLOUDINARY_API_SECRET || "";
export const CLOUDINARY_CLOUD_NAME: string =
  process.env.CLOUDINARY_CLOUD_NAME || "";
export const DATABASE_URL: string = process.env.DATABASE_URL || "mongodb+srv://aljisaptiadi:vmZwSrqW4tlG4lq1@cluster0.fkezp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
export const SECRET: string = process.env.SECRET || "secret";

// Konfigurasi transporter untuk mengirim email
export const mail = nodemailer.createTransport({
  service: "zoho",  // Sesuaikan dengan penyedia email yang kamu pakai
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});