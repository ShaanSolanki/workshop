import React from 'react'
import { useNavigate } from 'react-router'

function NoteCard({ note, onDelete }) {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/note/${note._id}`);
  };

  const handleDelete = () => {
    onDelete(note._id);
  };

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{note.title}</h2>
        <p className="text-sm text-gray-600 mb-2">
          {new Date(note.createdAt).toLocaleDateString()}
        </p>
        <p className="line-clamp-3">{note.content}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={handleEdit}>Edit</button>
          <button className="btn btn-error" onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default NoteCard