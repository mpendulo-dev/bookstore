import "./App.css";
import Input from "./components/Input";
import Books from "./components/Books";
import { useEffect, useState } from "react";
import { fetchBooks, createBook } from "../service/api";

function App() {
  const [books, setBooks] = useState("");

  useEffect(() => {
    fetchBooks().then((data) => setBooks(data));
  }, []);

  //create book
  const handleCreateBook = async (BookTitle) => {
    const bookData = { title: BookTitle, genre: "null" };
    const createdBook = await createBook(bookData);
    setBooks([...books, createdBook]);
  };

  // const handleInputData = (data) => {
  //   setNewBook(data);
  // };
  return (
    <div className="container mt-5">
      <h1 className="text-center">Book Store</h1>
      <Input onCreateBook={handleCreateBook} />
      <div className="books mt-4">
        <Books books={books} />
      </div>
    </div>
  );
}

export default App;
