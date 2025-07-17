import { useState } from "react";
import { useDispatch } from "react-redux";

const BookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState(0);

  const addBook = () => {
    dispatch({
      type: "ADD_BOOK",
      payload: { title, author, isbn: parseFloat(isbn) },
    });
    setTitle("");
    setAuthor("");
    setIsbn(0);
  };
  return (
    <>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        type="number"
        placeholder="ISBN"
        value={isbn}
        onChange={(e) => setIsbn(e.target.value)}
      />
      <button onClick={addBook}>Add Book</button>
    </>
  );
};
export default BookForm;
