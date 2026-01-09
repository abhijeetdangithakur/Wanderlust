
# 🌍 Wanderlust – Travel Listing Web Application

Wanderlust is a **full-stack travel listing web application** where users can explore places, create listings, share their experiences through reviews, and manage their accounts.
The main goal of this project is to practice **backend development, authentication, authorization, and database integration** using real-world concepts.

---

## 🚀 Live Demo

🔗 **Live Project:** https://wanderlust-hept.onrender.com/listings
🔗 **GitHub Repository:** https://github.com/abhijeetdangithakur/Wanderlust.git

---

## 🛠️ Tech Stack

### Frontend

* HTML
* CSS
* Bootstrap
* EJS (Embedded JavaScript Templates)

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### Authentication & Security

* Passport.js (Local Strategy)
* Express Sessions
* MongoDB Session Store (connect-mongo)
* Flash Messages

### Other Tools

* dotenv
* Method-Override
* EJS-Mate

---

## ✨ Features

* 🔐 User Authentication (Signup / Login / Logout)
* 👤 Authorization (only listing owners can edit or delete)
* 🏠 Add, view, edit and delete travel listings
* ⭐ Users can add and delete reviews
* ⚠ Flash messages for success and error handling
* 📱 Responsive UI
* 🌐 MongoDB Atlas database integration
* 🧠 Proper MVC architecture

---

## 📂 Project Structure

```
Wanderlust/
│
├── models/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── routes/
│   ├── listing.js
│   ├── reviews.js
│   └── user.js
│
├── views/
│   ├── listings/
│   ├── layouts/
│   └── users/
│
├── public/
│   ├── css/
│   └── js/
│
├── utils/
│   └── ExpressError.js
│
├── app.js
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup (Local)

1️⃣ Clone the repository

```bash
git clone https://github.com/abhijeetdangithakur/Wanderlust.git
```

2️⃣ Move into the project directory

```bash
cd Wanderlust
```

3️⃣ Install dependencies

```bash
npm install
```

4️⃣ Create a `.env` file

```env
ATLASDB_URL=your_mongodb_atlas_url
SECRET=your_session_secret
```

5️⃣ Start the server

```bash
nodemon app.js
```

6️⃣ Open in browser

```
http://localhost:8080
```

---

## 🧪 What I Learned from This Project

* Building RESTful routes using Express
* Implementing authentication & authorization with Passport.js
* Working with MongoDB Atlas and Mongoose
* Session handling using MongoDB as a session store
* Structuring a project using MVC pattern
* Deploying a full-stack web application

---

## 🚧 Future Improvements

* Add search and filter options for listings
* Improve UI/UX for better user experience
* Add location-based features using maps
* User profile section with activity history

*(These features are planned to improve the project step by step.)*

---

## 🙌 Author

**Abhijeet Dangi**

* GitHub: https://github.com/abhijeetdangithakur
* B.Tech CSE | Aspiring Software Engineer 🚀

---

## ⭐ Support

If you like this project, don’t forget to **star ⭐ the repository** on GitHub.

---

