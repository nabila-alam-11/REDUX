import { useDispatch, useSelector } from "react-redux";

const LibrarySummary = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const removeBook = (isbn) => {
    dispatch({ type: "REMOVE_BOOK", payload: { isbn } });
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
              <button onClick={() => removeBook(book.isbn)}>Remove</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default LibrarySummary;
