# 🍝 Recipe Management App (MERN Stack)

This web application is a personal recipe book, allowing users to easily manage their culinary creations. Built using the MERN stack with JWT authentication, this app provides a user-friendly platform to store, organize, and access recipes.


## Table of Content

- [Live Demo](#live-demo)
- [Features](#features)
- [Screenshots](#screenshots)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)


## Live Demo

Check out the live demo [here](https://recipe-app-dt8d.onrender.com/).
(This application is hosted on the free tier of Render, and there may be delays in loading times.)


## Features

1. **Recipe Creation**: Users can add new recipes, including titles, ingredients, instructions, and images.
2. **Recipe Editing**: Users can modify existing recipes.
3. **Recipe Deletion**: Users can remove unwanted recipes.
4. **Tagging System**: Users can assign tags to recipes (e.g., breakfast, lunch, dinner, favorite).
5. **Recipe Search**: Users can search for recipes based on the tags.
6. **User Authentication and Authorization**: Secure user accounts with JWT.


- ## Screenshots
 
 ![Screenshot1](https://i.postimg.cc/cHpq5R28/screenshot1.png)
 ![Screenshot1](https://i.postimg.cc/8CcqpXV6/screenshot2.png)
 ![Screenshot1](https://i.postimg.cc/3xKs6JS9/screenshot3.png)
 ![Screenshot1](https://i.postimg.cc/qMXfjCLz/screenshot4.png)

## Prerequisites

- [Node.js](https://nodejs.org/) installed (v14 or higher).
- [NPM](https://www.npmjs.com/) package manager
- [Git](https://git-scm.com/) for version control.
- [MongoDB](https://www.mongodb.com/) installed and running locally or on a remote server.


## Installation

1. Clone the repository:

   ```bash
    git clone https://github.com/ThashmilaJayasinghe/Recipe-App.git
2. Navigate to the project directory:

       cd Recipe-App   

3. Install server dependencies:

       npm install 

4. Create a `.env` file with the following variables:
   
       MONGO_URI=<your-mongodb-connection-string>
       JWT_SECRET=<your-jwt-secret>
       PORT=5000

5. Start the backend server

       npm run dev

6. Navigate to the client directory:
     
       cd frontend 

7. Install client dependencies:

       npm install 

8. Start the frontend app:

       npm run dev


## Folder Structure

```bash
Recipe-App/
│
├── backend/
│   ├── config/
│   │   └── db.js               # Contains MongoDB connection logic.              
│   ├── controllers/            # Houses controllers for handling business logic
│   ├── models/                 # Defines Mongoose models for the database 
│   ├── routes/                 # Contains route files for defining API endpoints   
│   ├── middleware/
│   │   └── authMiddleware.js   # Protects routes using JWT authentication 
│   └── server.js               # Entry point for the backend server
│
├── frontend/
│   ├── public/                 # Stores static assets
│   ├── src/                    # Contains the core React app logic
│   │   ├── assets/             # Stores static assets
│   │   ├── components/
│   │   ├── pages/              # Contains React components for different pages   
│   │   ├── services/           # Handles API calls  
│   │   ├── App.jsx             # Root component for the React app              
│   │   ├── main.jsx            # Entry point for rendering the React app       
│   │   ├── index.css           # Global styles for the app           
│   │   ├── ProtectedRoute.jsx  # Protects routes from unauthorized access          
│   ├── .gitignore              # Ignored files for Git
│   ├── index.html              # Main HTML template where the React app is rendered
│   ├── tailwind.config.js      # Configuration file for customizing Tailwind CSS.
│   └── package.json            # Frontend metadata and dependencies   
│
├── .env                            
├── .gitignore                   # Ignored files for Git  
├── README.md                    # Documentation  
└── package.json                 # Backend metadata and dependencies  

```

## Technologies Used
#### Frontend:

- React

#### Styling:

- Tailwind

#### Backend:

- Node.js
- Express.js
- MongoDB (Mongoose)
- JSON Web Tokens (JWT) for authentication
- bcrypt for secured password hashing