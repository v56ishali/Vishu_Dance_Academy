# Vishu's Dance Academy 🩰💃

Vishu's Dance Academy is a premium, full-stack web application designed for a modern dance academy. The application features user authentication (Students, Trainers, and Admins), class timetables, interactive course levels, admission application submissions, contact query forms, and custom animated navigation.

## 🚀 Live Deployments

- **Frontend (React)**: [https://vishu-dance-academy.vercel.app/](https://vishu-dance-academy.vercel.app/)
- **Backend (Express)**: [https://vishu-dance-academy.onrender.com/](https://vishu-dance-academy.onrender.com/)

---

## ✨ Features

- **Dynamic Navigation Transitions**: Smooth route switching powered by `framer-motion` page slide-up exit/entry dynamics.
- **Infinite Carousel Scroll**: A scrolling Alumni Wall of Fame featuring star graduates, which pauses scrolling when hovered over.
- **User Dashboard**: Dedicated dashboard panel showing profile update widgets and custom stats depending on the user's role (Student, Trainer, or Admin).
- **Secure Authentication**: Hashed passwords (`bcryptjs`) and secure session route controls (`JSON Web Tokens`).
- **Admission Portal**: Visual, clean registration forms for prospective students and instructors.
- **Responsive Layout**: Warm gold gradient borders, grid styles, and clean aesthetic components built for mobile, tablet, and desktop screens.

---

## 🛠️ Technology Stack

### Frontend
- **Framework**: React.js
- **Styling**: Tailwind CSS & Vanilla CSS
- **Animation**: Framer Motion
- **Routing**: React Router DOM (v7)

### Backend
- **Framework**: Express.js (Node.js)
- **Database**: MongoDB Atlas (with Mongoose ORM)
- **Security**: JSON Web Tokens (JWT) & bcryptjs
- **Middleware**: CORS & dotenv

---

## 📁 Repository Structure

```text
├── dance/               # Frontend React Application
│   ├── public/          # Static assets & routing configurations
│   ├── src/             # Components, Pages, Routes, & Styles
│   └── package.json     # Frontend dependencies & start scripts
│
├── BackEnd/             # Backend Express API Server
│   ├── server.js        # Main Express server entry point
│   └── package.json     # Backend dependencies & scripts
│
└── .gitignore           # Global git ignore configuration
```

---

## 💻 Local Setup Instructions

### Prerequisites
- Node.js (v18+)
- MongoDB (Running locally on `mongodb://127.0.0.1:27017` or a cloud instance URI)

### 1. Run the Backend
Navigate to the `BackEnd` directory, configure environment variables, install dependencies, and run:
```bash
cd BackEnd
npm install
node server.js
```
*(The server will run on `http://localhost:5000` and automatically seed initial trainer accounts).*

### 2. Run the Frontend
Open a new terminal, navigate to the `dance` directory, install dependencies, and run:
```bash
cd dance
npm install
npm run dev
```
*(The application will open on `http://localhost:3000` and connect to the local server).*

---

## 📄 License
This project is licensed under the **MIT License**. See the `LICENSE` file for details.
