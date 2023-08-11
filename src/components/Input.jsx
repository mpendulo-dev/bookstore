import { useState } from "react";
import { createBook } from "../../service/api";

const Input = ({ onCreateBook }) => {
  const [newBook, setNewBook] = useState("");

  const handleCreateBook = () => {
    if (newBook.trim() !== "") {
      onCreateBook(newBook);
      setNewBook("");
    }
  };

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="book" className="form-label">
          Add book
        </label>
        <input
          type="email"
          className="form-control"
          value={newBook}
          onChange={(e) => setNewBook(e.target.value)}
          id="book"
          placeholder="Book name"
        />
      </div>
      <button className="btn btn-primary" onClick={handleCreateBook}>
        Submit
      </button>
    </div>
  );
};

export default Input;
