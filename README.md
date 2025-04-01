# Chat Application

A simple real-time chat application built with React, WebSocket, Node.js, and MongoDB.

## Features

- **Real-Time Messaging**: Send and receive messages in real-time using WebSocket.
- **Message Timestamps**: Each message is tagged with a timestamp indicating when it was sent.
- **Usernames**: Users must provide a username before sending any messages.
- **Responsive UI**: The chat interface is responsive and user-friendly.
- **Message Alignment**: Messages are aligned to the left for the receiver and to the right for the sender, like in popular messaging applications.

## Prerequisites

- **Node.js**: Install [Node.js](https://nodejs.org/) (Recommended version: 16+)
- **MongoDB**: Set up MongoDB locally using [MongoDB Compass](https://www.mongodb.com/products/compass) or use a cloud service like MongoDB Atlas.
- **WebSocket server**: The backend uses WebSocket for real-time communication.

## Setting Up the Project

### Backend (Node.js + WebSocket + MongoDB)

1. **Install Dependencies**: Navigate to the `backend` folder and run:

   ```bash
   npm install
   ```

2. **Configure MongoDB**: Make sure MongoDB is running either locally via MongoDB Compass.

   - For MongoDB Compass, connect to your local instance and note the connection string.
   - Set the MongoDB connection URI in the backend `server.ts` file like so:
     ```ts
     const uri = "mongodb://localhost:27017/chatApp";
     ```

3. **Start the Backend Server**: Run the following command to start the server:

   ```bash
   npm run dev
   ```

4. **Check for MongoDB Connection**: Ensure that the server is running without errors and able to connect to the database.

### Frontend (React)

1. **Install Dependencies**: Navigate to the `frontend` folder and run:

   ```bash
   npm install
   ```

2. **Start the Frontend Server**: Run the following command to start the React development server:

   ```bash
   npm run dev
   ```

3. **Access the App**: Open your browser and go to `http://localhost:5173` to access the chat application.

## How to Use

1. **Enter a Username**: Before sending any message, you must enter a username.
2. **Send and Receive Messages**: Once the username is set, you can start typing messages. Messages will appear in real-time.
3. **Message Alignment**: The sender's messages will appear on the right, while the receiver’s messages will appear on the left.
4. **Timestamp**: Each message has a timestamp showing when it was sent.

## Future Improvements

- Add user authentication (e.g., using JWT).
- Implement message persistence in the database to fetch previous messages.
- Optimize the UI with more custom styles and improve accessibility.

## Troubleshooting

- If the server cannot connect to MongoDB, check if MongoDB is running and that the connection string is correct.
- If you encounter WebSocket connection issues, ensure the backend is properly running and accessible.
