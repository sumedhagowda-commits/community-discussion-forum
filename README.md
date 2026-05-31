# 💬 Community Discussion Forum with Real-Time Chat

A **Full Stack MERN Application** that enables users to create discussion rooms and chat in real-time using Socket.IO.  
Built for learning, portfolio, and real-world full-stack development practice.

---

## 🚀 Live Features

- 🔐 User Registration & Login (JWT Authentication)
- 💬 Create & Join Discussion Rooms
- ⚡ Real-Time Chat using Socket.IO
- 🗄 Store Messages in MongoDB
- 📜 View Chat History
- 🔄 Instant Message Updates (No Refresh Needed)

---

## 🛠 Tech Stack

**Frontend:**
- React.js
- Axios
- Socket.IO Client

**Backend:**
- Node.js
- Express.js
- Socket.IO

**Database:**
- MongoDB
- Mongoose

**Authentication:**
- JSON Web Token (JWT)

---

Community-Discussion-Forum/
│
├── client/ # Frontend (React)
│ ├── src/
│ │ ├── pages/
│ │ ├── services/
│ │ ├── App.jsx
│ │ └── main.jsx
│
├── server/ # Backend (Node + Express)
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ ├── server.js
│
└── README.md


---

## ⚙️ Installation Guide

### 1️⃣ Clone Repository
```bash
git clone https://github.com/your-username/community-forum.git
cd community-forum
2️⃣ Backend Setup
cd server
npm install

Create .env file:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=secret123

Run backend:

node server.js
3️⃣ Frontend Setup
cd client
npm install
npm run dev
🔗 API Endpoints
Auth Routes
POST /api/auth/register → Register User
POST /api/auth/login → Login User
Discussion Routes
GET /api/discussions → Get Discussions
POST /api/discussions → Create Discussion
POST /api/discussions/:id/message → Add Message
⚡ Socket.IO Events
Client → Server
join → Join discussion room
message → Send message
Server → Client
message → Receive real-time message
💡 How It Works
User registers and logs in
JWT authentication is generated
User creates or joins a discussion
Socket.IO connects user to room
Messages are sent in real-time
Messages are stored in MongoDB
All users see updates instantly
📸 Screenshots (Add Later)
Login Page
Register Page
Dashboard
Discussion Chat UI
🧠 Key Learnings
MERN Stack Development
REST API Design
JWT Authentication
Socket.IO Real-Time Communication
MongoDB Schema Design
Full Stack Integration
🚀 Future Improvements
Online users indicator
Typing indicator
Profile avatars
Edit/Delete messages
Notifications system
Deployment (Vercel + Render)
👨‍💻 Author

Built as a Full Stack Development project for learning and portfolio purposes.

🙏 Special Thanks

Thanks to my mentor for continuous guidance and support during this project.