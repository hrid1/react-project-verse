
import { useLoaderData } from "react-router-dom";
import Book from "../Book/Book";

const Books = () => {
  const booksData = useLoaderData().books;
  // console.log(booksData);

  return (
    <div className="m-5 p-5">
      <h1 className=" font-bold text-center text-3xl mb-4">
        All books: <span>{booksData.length}</span>
      </h1>

       <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
       {
            booksData.map(book => <Book key={book.isbn13} book={book}></Book> )
        }
   
       </div>
    </div>
  );
};

export default Books;
