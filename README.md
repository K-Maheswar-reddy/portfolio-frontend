# Dynamic Portfolio (MERN Stack)

A **fully dynamic, responsive portfolio website** built using the **MERN stack** (MongoDB, Express, React, Node.js) with **TailwindCSS** for styling and smooth scroll navigation.

---

## Features
- 📄 Dynamic content fetched from MongoDB Atlas
- 🎨 Responsive UI with TailwindCSS
- 🖱️ Smooth scrolling navigation between sections
- 📌 Active section highlighting on scroll
- ⚡ Fast loading with minimal dependencies

---

## Tech Stack
**Frontend:** React, TailwindCSS, Axios, React Icons  
**Backend:** Node.js, Express.js, MongoDB, Mongoose  
**Other Tools:** Git, Postman

---

## 📂 Project Structure
mern-portfolio/
│── backend/ # Express API & Mongoose models
│── public/ # HTML, manifest, favicons
│── src/ # React components & context
│── .env # Environment variables (ignored in git)
│── package.json # Project metadata & dependencies
│── tailwind.config.js
│── README.md

---

## Installation & Setup

### Clone the Repository

git clone https://github.com/your-username/mern-portfolio.git
cd mern-portfolio

Install Frontend Dependencies
npm install

Install Backend Dependencies
cd backend
npm install

Setup .env
Inside backend/ create a .env file:

PORT=5000
MONGO_URI=your-mongodb-uri
Running the App

Run Backend

cd backend
npm start
Run Frontend
 
npm start
Smooth Scroll Navigation
Implemented using:

element.scrollIntoView({ behavior: "smooth" });
Each section has an id matching the navbar button.

Screenshots
(Add screenshots here after running the project)

License
MIT License © 2025 Your Name

If you want, I can also **add emojis for each section title** and a **demo image placeholder** so your GitHub page looks more eye-catching.  
Do you want me to make that styled version?