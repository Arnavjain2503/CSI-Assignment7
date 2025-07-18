# CSI-Assignment 6  
# 🛍️ Product REST API with JWT Authentication

A clean and modular RESTful API built with **Node.js + Express** to manage a collection of products with full CRUD functionality. This version implements **JWT-based authentication** for secure access to the API.

---

## 🚀 Features

- ✅ **JWT Authentication**: Secure endpoints with token-based authentication  
- ✅ **RESTful API**: CRUD operations for managing products  
- ✅ **Input validation** using **Joi**  
- ✅ **Custom middleware** for logging and error handling  
- ✅ **In-memory data structure** (no DB required for demo purposes)  
- ✅ **Tested with Postman**

---

## 🗂️ Tech Stack

- **Node.js**  
- **Express.js**  
- **jsonwebtoken** – Token-based authentication  
- **bcryptjs** – Password hashing  
- **Joi** – Schema validation  
- **Morgan** – HTTP request logger  
- **Dotenv** – Environment variable management  
- **Nodemon** – Auto-restart for development

---

## 📁 Project Structure

```bash
product-api/
├── src/
│   ├── controllers/       # Business logic for products
│   ├── routes/            # Routes for product operations
│   ├── middleware/        # Logging & error-handling middleware
│   ├── validation/        # Joi schemas for data validation
│   ├── auth/              # Authentication-related files
│   └── server.js          # Main server entry point
├── .env                   # Environment variables (e.g., JWT_SECRET)
├── .gitignore             # Ignore node_modules & env files
├── package.json           # Dependencies and scripts
└── README.md              # Project overview
```
## ⚙️ Installation & Running the Server
1. Clone the repository:
```bash
git clone https://github.com/Arnavjain2503/CSI-Assignment6.git
cd CSI-Assignment6/product-api
```
2. Install dependencies:
```
npm install
```
3. Run the development server:
```
npm run dev   # or use npm start for production
The server will be available at:
👉 http://localhost:5000
```
## 🔒 API Endpoints
- Method	Endpoint	Description
- GET	/api/products	Get all products
- GET	/api/products/:id	Get a product by ID
- POST	/api/products	Create a new product
- PUT	/api/products/:id	Update a product
- DELETE	/api/products/:id	Delete a product
- POST	/api/auth/login	Login and get JWT token

## 📦 Sample JSON Payload
✅ POST / PUT Body Format
```bash
{
  "name": "Wireless Mouse",
  "price": 24.99
}
```
```bash
✅ Login Payload
```
```bash
{
  "username": "admin",
  "password": "password123"
}
```
## 🧪 Postman Testing
All endpoints were tested using Postman, including:

- ✅ Login and generate JWT token

- ✅ GET, POST, PUT, and DELETE requests with JWT authorization.

- ✅ Error handling for invalid credentials and token expiration.

| Operation                    | Screenshot                                        |
| ---------------------------- | ------------------------------------------------- |
| ✅ **Create Access Denied**   | ![Found](screenshots/Screenshot%20\(77\).png)     |
| ✅ **Adding JWT Token**       | ![GET all](screenshots/Screenshot%20\(81\).png)   |
| ✅ **GET product**            | ![GET by ID](screenshots/Screenshot%20\(78\).png) |
| ✅ **Add Access Denied**      | ![Created](screenshots/Screenshot%20\(79\).png)   |
| ✅ **Added product**          | ![Create](screenshots/Screenshot%20\(80\).png)    |
| ✅ **PUT update product**     | ![Update](screenshots/Screenshot%20\(746\).png)   |

## 📌 Notes
- Data is stored in-memory (products.js) for simplicity.

- You can easily replace the in-memory store with a real database like MongoDB or MySQL.

- Validation ensures users can only send valid data to the server.

- The JWT token expires in 1 hour. You will need to login again to get a new token.

## Author 
Arnav Jain
