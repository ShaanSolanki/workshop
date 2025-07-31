import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import { toast } from 'react-hot-toast'
import axios from 'axios'

const NoteDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    fetchNote();
  }, [id]);

  const fetchNote = async () => {
    try {
      const response = await axios.get(`http://localhost:5001/notes/get`);
      const notes = response.data;
      const foundNote = notes.find(n => n._id === id);
      if (foundNote) {
        setNote(foundNote);
        setTitle(foundNote.title);
        setContent(foundNote.content);
      } else {
        toast.error('Note not found');
        navigate('/');
      }
    } catch (error) {
      toast.error('Error fetching note');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:5001/notes/update/${id}`, {
        title,
        content
      });

      setNote(response.data);
      setEditing(false);
      toast.success('Note updated successfully!');
    } catch (error) {
      toast.error('Error updating note');
      console.error('Error:', error);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      try {
        await axios.delete(`http://localhost:5001/notes/delete/${id}`);
        toast.success('Note deleted successfully');
        navigate('/');
      } catch (error) {
        toast.error('Error deleting note');
        console.error('Error:', error);
      }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!note) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-gray-600 text-lg">Note not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-white">Note Details</h1>
            <div className="flex gap-2">
              {!editing ? (
                <button
                  onClick={() => setEditing(true)}
                  className="btn btn-primary btn-sm"
                >
                  Edit
                </button>
              ) : (
                <button
                  onClick={handleUpdate}
                  className="btn btn-success btn-sm"
                >
                  Save
                </button>
              )}
              <button
                onClick={handleDelete}
                className="btn btn-error btn-sm"
              >
                Delete
              </button>
              <button
                onClick={() => navigate('/')}
                className="btn btn-ghost btn-sm text-white"
              >
                Back
              </button>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title
            </label>
            {editing ? (
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            ) : (
              <h2 className="text-2xl font-bold text-gray-800">{note.title}</h2>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Content
            </label>
            {editing ? (
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows="12"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
            ) : (
              <div className="prose max-w-none">
                <p className="text-gray-700 whitespace-pre-wrap">{note.content}</p>
              </div>
            )}
          </div>

          <div className="text-sm text-gray-500">
            Created: {new Date(note.createdAt).toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoteDetail