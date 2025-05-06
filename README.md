
FootballClubWebsite is a full-stack e-commerce platform built for selling football club merchandise and tickets. The project uses modern technologies like React, Node.js, and MongoDB, and includes real-time features powered by WebSockets for concurrent ticket booking and live updates. It supports user authentication, order management, and a dedicated admin dashboard.

Table of Contents
Features

Tech Stack

Installation

Usage

Project Structure

Contributing

License

Features
E-commerce functionality for merchandise and ticket sales

Real-time updates using WebSockets

Seat booking with concurrency control

User authentication and session management

Admin dashboard for managing products and orders

Order history and user-specific data views

Tech Stack
Frontend: React, Tailwind CSS (or other CSS framework)

Backend: Node.js with Express

Database: MongoDB

Real-Time: Socket.IO

Version Control: Git & GitHub

Installation
Prerequisites
Node.js v16+

MongoDB (local or Atlas)

Git

Steps
Clone the repository:

bash
Copy
Edit
git clone https://github.com/Drorh473/FootballClubWebsite.git
cd FootballClubWebsite
Install dependencies:

bash
Copy
Edit
npm install
cd client
npm install
Configure environment variables:
Create a .env file in the root directory:

ini
Copy
Edit
MONGO_URI=mongodb://localhost:27017/footballclub
PORT=5000
Run the development servers:

Backend:

bash
Copy
Edit
npm run dev
Frontend:

bash
Copy
Edit
cd client
npm start
Usage
Visit http://localhost:3000

Register or log in as a user

Browse and purchase products or tickets

Admins can manage inventory and view orders from a dedicated panel

Project Structure
bash
Copy
Edit
FootballClubWebsite/
├── client/               # React frontend
│   ├── components/       # Reusable UI components
│   └── pages/            # Frontend views and routes
├── server/               # Express backend API
│   ├── models/           # Mongoose schemas
│   ├── routes/           # REST API endpoints
│   └── sockets/          # WebSocket event handling
├── .env                  # Environment configuration
└── README.md
Contributing
To contribute:

Fork the repository

Create a new branch

Make your changes

Submit a pull request
