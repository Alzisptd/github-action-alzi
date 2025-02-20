import express from "express";
import db from "./utils/database";
import routes from "./routes/api";
import bodyParser from "body-parser";
import docs from "./docs/route";
import cors from 'cors';


const PORT = 5000;

async function init() {
  try {
    await db();

    const app = express();

    // Konfigurasi CORS
    app.use(cors({
      origin: ['http://34.46.29.47:3000', 'http://localhost:3000','https://alzife.sanbercode.com'], // URL frontend Kita
      methods: ['GET', 'POST', 'PUT', 'DELETE'], // Sesuaikan metode yang diizinkan
      allowedHeaders: ['Content-Type', 'Authorization'], // Header yang diperbolehkan
    }));

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use("/api", routes);
    docs(app);



    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

init();
