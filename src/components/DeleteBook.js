import React from 'react';

const DeleteBook = ({ book, onDelete }) => {
    return (
        <div className='delete'>
            <h2>Delete Book</h2>
            <p>Are you sure you want to delete {book.title} by {book.author}?</p>
            <button className='delete-btn' onClick={() => onDelete(book.id)}>Confirm Delete</button>
        </div >
    );
};

export default DeleteBook;
