import axios from "axios";
import { createContext, useState } from "react";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  // Get all books stored in DB
  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  // Creating books
  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books/", {
      title,
    });

    setBooks([...books, response.data]);
  };

  // Editing books: needs an id
  const editBookByID = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  // Deleting books: needs an id
  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const valuesToShare = {
    books,
    deleteBookById,
    editBookByID,
    createBook,
    fetchBooks,
  };

  return (
    <BooksContext.Provider value={valuesToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
