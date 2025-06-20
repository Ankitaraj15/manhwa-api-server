# 📚 Manhwa API Server

A RESTful API server built with **Node.js**, **Express.js**, and **MongoDB** to manage a collection of **manhwas** (Korean comics). This API supports full CRUD operations.

---

## 🛠 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via MongoDB Atlas)
- **Testing Tool**: Postman

---

## 🚀 Features

- Create a new manhwa
- Retrieve all manhwas
- Update a manhwa by ID
- Delete a manhwa by ID

---

## 📁 Project Structure

manhwa-api-server/
├── models/
│ └── Manhwa.js # Mongoose schema/model
├── server.js # Entry point of the API server
├── .env # Environment variables (DB connection string)
└── README.md # Project documentation


## ⚙️ Setup Instructions

### 1. Clone the repository
git clone https://github.com/yourusername/manhwa-api-server.git
cd manhwa-api-server

###2. Install dependencies
npm install


###3. Configure environment variables
Create a .env file in the root of the project:
MONGO_URI=mongodb+srv://<your-username>:<your-password>@manhwa.ye9clkt.mongodb.net/?retryWrites=true&w=majority
PORT=5000
Replace <your-username> and <your-password> with your actual MongoDB Atlas credentials.


###4. Start the server
node server.js
The server will run at:
http://localhost:5000


##🔗 API Endpoints
➕ Create Manhwa
URL: /api/manhwas

Method: POST
Body:raw
json
{
  "title": "Solo Leveling",
  "author": "Chugong",
  "genre": "Action, Fantasy",
  "status": "Ongoing",
  "chapters": 189
}


📥 Get All Manhwas
URL: /api/manhwas
Method: GET



✏️ Update Manhwa by ID
URL: /api/manhwas/:id
Method: PUT
Body:raw
json

{
  "title": "Solo Leveling",
  "author": "Chugong",
  "genre": "Action, Fantasy",
  "status": "Completed",
  "chapters": 200
}



❌ Delete Manhwa by ID
URL: /api/manhwas/:id
Method: DELETE



##🧪 How to Test the API
Use Postman or run this from the terminal:

curl -X GET http://localhost:5000/api/manhwas
📌 Notes
Ensure MongoDB Atlas is properly connected

The server uses Express and Mongoose

All responses are JSON formatted

###👩‍💻 Author
##Ankita Raj
B.Tech CSE | 2026 | KIIT

###📂 License
This project is open-source and free to use.
Let me know when you're ready to push it to GitHub, and I’ll guide you step by step. Or we can also build a frontend later if you like!








