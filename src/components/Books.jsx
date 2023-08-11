import React, { useState } from "react";

const Books = ({ books, onDeleteBook, updateBook }) => {
  const [editing, setEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(books.title);

  const handleTextChange = (e) => {
    // setUpdatedText(e.target.value);
    setUpdatedText({ ...updatedText, text: e.target.value });
  };
  const handleUpdate = () => {
    updateBook(books._id, updatedText);
    setEditing(false);
  };

  return (
    <>
      {books &&
        books.map((book, index) => (
          <div key={index}>
            <div className="card mb-3">
              <div className="card-body">
                <div className="float-start">{book.title}</div>
                <div className="float-end">
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => setEditing(true)}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => onDeleteBook(book._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Books;
