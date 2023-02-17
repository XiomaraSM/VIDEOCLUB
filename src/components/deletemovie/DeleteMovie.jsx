import React, { useState } from 'react';
import './deleteMovie.css'

const DeleteMovie = ({ id, onDelete }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    if (window.confirm('¿Está seguro que desea borrar la película?')) {
      setIsDeleting(true);
      onDelete(id);
    }
  };

  return (
    <button onClick={handleDelete} disabled={isDeleting}>
      {isDeleting ? 'Borrando...' : 'Borrar'}
    </button>
  );
};

export default DeleteMovie

