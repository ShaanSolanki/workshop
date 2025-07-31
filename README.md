# Notes Application

A full-stack notes application built with React (frontend) and Node.js/Express (backend) with MongoDB database.

## Features

- Create, read, update, and delete notes
- Responsive design with modern UI
- Real-time notifications
- MongoDB database integration

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Install CORS (if not already installed):

   ```bash
   npm install cors
   ```

4. Create a `.env` file in the backend directory with your MongoDB URI:

   ```
   mongoURI=mongodb://localhost:27017/workshop
   PORT=5000
   ```

5. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm run dev
   ```

## Usage

1. Open your browser and go to `http://localhost:5173` (or the port shown by Vite)
2. Click "Create Note" to add a new note
3. View your notes on the home page
4. Click "Edit" on any note to modify it
5. Click "Delete" to remove a note

## API Endpoints

- `POST /notes/create` - Create a new note
- `GET /notes/get` - Get all notes
- `PUT /notes/update/:id` - Update a note
- `DELETE /notes/delete/:id` - Delete a note

## Technologies Used

- **Frontend**: React, Vite, Tailwind CSS, DaisyUI, React Router, React Hot Toast
- **Backend**: Node.js, Express, MongoDB, Mongoose, CORS
- **Database**: MongoDB
