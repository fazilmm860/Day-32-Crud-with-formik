import React, { useState } from 'react';
import { booksData } from './mockData';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';
import DeleteBook from './components/DeleteBook';
import './App.css'

const App = () => {
  const [books, setBooks] = useState(booksData);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
    setShowAddForm(false);
  };

  const handleEditBook = (id, updatedBook) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) => (book.id === id ? { ...book, ...updatedBook } : book))
    );
    setShowEditForm(false);
  };

  const handleDeleteBook = (id) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
    setShowDeleteConfirmation(false);
  };

  return (
    <div>
      <h1 className='header'>Library Management Dashboard</h1>
      <BookList
        books={books}
        onEdit={(book) => {
          setSelectedBook(book);
          setShowEditForm(true);
        }}
        onDelete={(id) => {
          setSelectedBook(books.find((book) => book.id === id));
          setShowDeleteConfirmation(true);
        }}
      />
      {showAddForm && <AddBook onAdd={handleAddBook} />}
      {showEditForm && selectedBook && (
        <EditBook book={selectedBook} onUpdate={handleEditBook} />
      )}
      {showDeleteConfirmation && selectedBook && (
        <DeleteBook book={selectedBook} onDelete={handleDeleteBook} />
      )}
      <button className='btn-submit' onClick={() => setShowAddForm(!showAddForm)}>
        {showAddForm ? 'Cancel' : 'Add Book'}
      </button>
    </div>
  );
};

export default App;
