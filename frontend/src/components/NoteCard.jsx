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
        <h2 className="card-title text-lg font-semibold truncate" title={note.title}>
          {note.title}
        </h2>
        <p className="text-sm text-gray-600 mb-2">
          {new Date(note.createdAt).toLocaleDateString()}
        </p>
        <p className="text-gray-700 line-clamp-3 leading-relaxed">
          {note.content}
        </p>
        <div className="card-actions justify-end mt-4">
          <button className="btn btn-primary btn-sm" onClick={handleEdit}>view</button>
          <button className="btn btn-error btn-sm" onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default NoteCard