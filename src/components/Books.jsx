const Books = ({ books, onDeleteBook }) => {
  return (
    <div>
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
                    <button type="button" className="btn btn-secondary">
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
    </div>
  );
};

export default Books;
