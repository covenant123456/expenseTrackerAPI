# 💰 Expense Tracker API

A secure and scalable RESTful API for managing **income**, **expenses**. Built with **Node.js**, **Express**, **MongoDB**, **Zod**, and **JWT authentication**.

---

## 🚀 Features

- ✅ User authentication (register, login, JWT auth)
- 💵 Income CRUD (create, read, update, delete)
- 📉 Expense CRUD
- ✅ Input validation with Zod
- 🔐 Auth middleware (JWT)
- 🧪 Swagger API documentation

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Validation**: Zod
- **Authentication**: JWT
- **API Docs**: Swagger (OpenAPI)
- **Dev Tools**: Nodemon, dotenv

---

## ⚙️ Project Setup

### 1. Clone the Repository

```bash
git clone https://github.com/covenant123456/expenseTrackerAPI
cd expense-tracker-api
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Create `.env` File

Create a `.env` file at the root and add:

```env
PORT=8000
MONGO_URI=mongodb://localhost:27017/expense-tracker
JWT_SECRET=yourSuperSecretKey
```

> ✅ Replace `JWT_SECRET` with your own secure key.

### 4. Start MongoDB

Ensure MongoDB is running on your machine. If installed locally:

```bash
mongod
```

Or use a MongoDB Atlas URI instead in `.env`.

### 5. Start the Server

```bash
npm run dev
```

The server will start on `http://localhost:8000`.

---

## 📚 API Documentation

> Swagger UI available at:

```
http://localhost:8000/api/docs
```

* Click **"Authorize"** to input your JWT token and access protected routes.
* Try out all the endpoints directly in the browser.

---

## 🔐 Authentication

Use these endpoints to register and log in:

| Method | Endpoint             | Description       |
| ------ | -------------------- | ----------------- |
| POST   | `/api/auth/register` | Register a user   |
| POST   | `/api/auth/login`    | Login and get JWT |

All other routes require:

```
Authorization: Bearer <your_token>
```

---

## 📊 Income Endpoints (Protected)

| Method | Endpoint          | Description          |
| ------ | ----------------- | -------------------- |
| POST   | `/api/income`     | Create income record |
| GET    | `/api/income`     | Get all user incomes |
| GET    | `/api/income/:id` | Get income by ID     |
| PUT    | `/api/income/:id` | Update income by ID  |
| DELETE | `/api/income/:id` | Delete income by ID  |

---
## 📊 Expense Endpoints (Protected)

| Method | Endpoint          | Description          |
| ------ | ----------------- | -------------------- |
| POST   | `/api/expense`     | Create expense record |
| GET    | `/api/expense`     | Get all user expenses |
| GET    | `/api/expense/:id` | Get expense by ID     |
| PUT    | `/api/expense/:id` | Update expense by ID  |
| DELETE | `/api/expesne/:id` | Delete expense by ID  |

---

## 📦 Future Improvements

* ✅ Budget planning and limits
* ✅ Monthly/weekly financial summary
* ✅ PDF/CSV report downloads
* ✅ Notifications for financial habits

---

## 🧠 Author

**Covenant Ekundayo**
👨🏽‍💻 [@covenant123456](https://github.com/covenant123456)

---

## 📄 License

This project is licensed under the MIT License.

