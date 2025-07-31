import React, { useState, useEffect } from 'react'
import NoteCard from '../components/NoteCard'
import { toast } from 'react-hot-toast'
import axios from 'axios'

const HomePage = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNotes = async () => {
    try {
      const response = await axios.get('http://localhost:5001/notes/get');
      setNotes(response.data);
    } catch (error) {
      toast.error('Error fetching notes');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (noteId) => {
    try {
      await axios.delete(`http://localhost:5001/notes/delete/${noteId}`);
      toast.success('Note deleted successfully');
      fetchNotes(); // Refresh the notes list
    } catch (error) {
      toast.error('Error deleting note');
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">My Notes</h1>
      {notes.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-600 text-lg">No notes found. Create your first note!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note) => (
            <NoteCard key={note._id} note={note} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
}

export default HomePage