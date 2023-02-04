import Book from "./components/Book";
import "./css/App.css";

let firstBook = {
  src: "https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L._AC_UL600_SR600,400_.jpg",
  title: "Atomic Habits",
  author: "James Clear",
};

let secondBook = {
  title: "It Starts with Us",
  author: "Colleen Hoover",
  src: "https://images-na.ssl-images-amazon.com/images/I/71PNGYHykrL._AC_UL300_SR300,200_.jpg",
};

let thirdBook = {
  author: "Colleen Hoover",
  title: "Reminders of Him: A Novel",
  src: "https://images-na.ssl-images-amazon.com/images/I/617uZq23IPL._AC_UL600_SR600,400_.jpg",
};

let fourthBook = {
  title: "Ugly Love: A Novel",
  author: "Colleen Hoover",
  src: "https://images-na.ssl-images-amazon.com/images/I/71E8VNPC1dL._AC_UL600_SR600,400_.jpg",
};

let fifthBook = {
  title: "Never Give an Inch",
  author: "Mike Pompeo",
  src: "https://images-na.ssl-images-amazon.com/images/I/71XS8x7ykIL._AC_UL300_SR300,200_.jpg",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        src={firstBook.src}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        src={secondBook.src}
        title={secondBook.title}
        author={secondBook.author}
      />
      <Book
        src={thirdBook.src}
        title={thirdBook.title}
        author={thirdBook.author}
      />
      <Book
        src={fourthBook.src}
        title={fourthBook.title}
        author={fourthBook.author}
      />
      <Book
        src={fifthBook.src}
        title={fifthBook.title}
        author={fifthBook.author}
      />
    </section>
  );
}

export default BookList;
