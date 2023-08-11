import "./App.css";
import Input from "./components/Input";
import Books from "./components/Books";
import { useEffect, useState } from "react";
import { fetchBooks, createBook, deleteBook } from "../service/api";

function App() {
  const [books, setBooks] = useState("");
  const [tasksUpdated, setTasksUpdated] = useState(false);

  useEffect(() => {
    fetchBooks().then((data) => setBooks(data));
  }, [tasksUpdated]);

  //create book
  const handleCreateBook = async (bookTitle) => {
    const bookData = { title: bookTitle, genre: "null" };
    const createdBook = await createBook(bookData);
    setBooks([...books, createdBook]);
  };
  //update book

  //delete book
  const handleDeleteBook = async (bookId) => {
    const updatedBooks = books.filter((book) => book._id !== bookId);
    setBooks(updatedBooks);
    await deleteBook(bookId);
    setTasksUpdated(!tasksUpdated);
  };
  return (
    <div className="container mt-5">
      <h1 className="text-center">Book Store</h1>
      <Input onCreateBook={handleCreateBook} />
      <div className="books mt-4">
        <Books books={books} onDeleteBook={handleDeleteBook} />
      </div>
    </div>
  );
}

export default App;
