import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "./actions";

const BookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");

  const bookAdd = () => {
    dispatch(addBook({ title, author, isbn: parseFloat(isbn) }));

    setTitle("");
    setAuthor("");
    setIsbn("");
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
      <button onClick={bookAdd}>Add Book</button>
    </>
  );
};
export default BookForm;
