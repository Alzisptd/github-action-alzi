import swaggerAutogen from "swagger-autogen";

const outputFile = "./swagger_output.json";
const endpointsFiles = ["../routes/api.ts"];

const doc = {
    info: {
      version: "v0.0.1",
      title: "Tugas Akhir Nodejs - M Alzi",
      description: "Dokumentasi API Tugasakhir penjualan",
    },
    servers: [
      {
        url: "http://localhost:3000/api",
        description: "Local Server",
      },
      {
        url: "https://sanberbe61-m-alzi-saptiadi.vercel.app/api",
        description: "versel",
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
            type: "http",      // Jenis autentikasi yang digunakan
            scheme: "bearer",  // Menggunakan skema Bearer
            bearerFormat: "JWT", // Format token yang digunakan adalah JWT (opsional)
        },
      },
      schemas: {
        LoginRequest: {
          email: "joni2024@yopmail.com",
          password: "123412341",
        },
        RegisterRequest: {
          fullName: "joni joni",
          username: "joni2024",
          email: "joni2024@yopmail.com",
          password: "123412341",
          confirmPassword: "123412341",
        },
        UpdateProfileRequest: {
          fullName: "joni joni",
          username: "joni2024",
          email: "joni2024@yopmail.com",
          password: "123412341",
          confirmPassword: "123412341",
        },
        Storeproduct: {
            "name": "Handphone 2",
            "description": "Deskripsi kemeja dengan kategori 100",
            "images": ["sepatu3.jpg"],
            "price": 25000,
            "qty": 200,
            "category": "6673eed48865a2d1991420cc"
        },
        Storecategories: {
            "name": "Handphone 2",
            "description": "Deskripsi kemeja dengan kategori 100",
            "images": ["sepatu3.jpg"],
            "price": 25000,
            "qty": 200,
            "category": "6673eed48865a2d1991420cc"
        },
        FileUploadRequest: {
            type: "object",
            properties: {
              file: {
                type: "string",
                format: "binary", // menandakan file yang diupload
              },
            },
          },
          Createorder: {
            "grandTotal": 6000000,
            "orderItems": [
              {
                "name": "TV 4",
                "productId": "6733691f1d68f77f6d0c3826",
                "price": 2000000,
                "quantity": 3
              },
              {
                "name": "Kulkas 1",
                "productId": "6733691f1d68f77f6d0c3826",
                "price": 5000000,
                "quantity": 5
              }
            ],
            "createdBy": "673ab2f7a876d57a0ca99438",
            "status": "completed",
            "email": "aljisaptiadi@gmail.com",
            "fullName": "Muhammad Alzi Saptiadi"
          },
      },
    },
  };

swaggerAutogen({ openapi: "3.0.0" })(outputFile, endpointsFiles, doc);