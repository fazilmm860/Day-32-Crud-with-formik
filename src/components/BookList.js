import React from 'react'

const BookList = ({books, onEdit, onDelete}) => {
    return (
        <div className='book-list'>
        <h2>Book List</h2>
        <ul className='book-ul' >
            {books.map((book)=>(
                <li key={book.id}>
                    {book.title} by {book.author}
                    <button onClick={()=>onEdit(book)}>Edit</button>
                    <button onClick={()=>onDelete(book.id)}>Delete</button>

                </li>
            ))}
    
        </ul>
        </div>
    )
}

export default BookList
