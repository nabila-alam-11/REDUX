import { useDispatch, useSelector } from "react-redux";
import { removeBook } from "./actions";

const LibrarySummary = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const deleteBook = (isbn) => {
    dispatch(removeBook(isbn));
  };
  return (
    <>
      <h2>Library Summary</h2>
      <p>Total Books: {books.length}</p>
      <ul>
        {books.map((book) => {
          return (
            <li key={book.isbn}>
              {book.title} by {book.author} (ISBN: {book.isbn})
              <button onClick={() => deleteBook(book.isbn)}>Remove</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default LibrarySummary;
