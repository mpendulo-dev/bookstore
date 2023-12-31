const api = `${import.meta.env.VITE_APP_SERVER_URL}/api`;
const API_BASE_URL = api || "http://localhost:3001/api";

export async function fetchBooks() {
  const response = await fetch(`${API_BASE_URL}/book`);
  return response.json();
}

export async function createBook(book) {
  const response = await fetch(`${API_BASE_URL}/book`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  });
  return response.json();
}

export async function updateBook(bookId, book) {
  const response = await fetch(`${API_BASE_URL}/book/${bookId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  });
  return response.json();
}

export async function deleteBook(bookId) {
  const response = await fetch(`${API_BASE_URL}/book/${bookId}`, {
    method: "DELETE",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
  return response.json();
}
