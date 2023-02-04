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

let sixthBook = {
  title: "The Housemaid",
  author: "Freida McFadden",
  src: "https://images-na.ssl-images-amazon.com/images/I/81PDk822yzL._AC_UL300_SR300,200_.jpg",
};

let seventhBook = {
  title: "Rich Dad Poor Dad",
  author: "Robert T. Kiyosaki",
  src: "https://images-na.ssl-images-amazon.com/images/I/81PuKheA8xL._AC_UL300_SR300,200_.jpg",
};

let eightBook = {
  title: "Final Offer",
  author: "Lauren Asher",
  src: "https://images-na.ssl-images-amazon.com/images/I/91hLkHe+ETL._AC_UL300_SR300,200_.jpg",
};

let ninthBook = {
  title: "Think and Grow Rich",
  author: "Napoleon Hill",
  src: "https://images-na.ssl-images-amazon.com/images/I/71UypkUjStL._AC_UL300_SR300,200_.jpg",
};

let tenthBook = {
  title: "The Psychology of Money",
  author: "Morgan Housel",
  src: "https://images-na.ssl-images-amazon.com/images/I/71J3+5lrCDL._AC_UL300_SR300,200_.jpg",
};

let eleventhBook = {
  title: "Holly",
  author: "Stephen King",
  src: "https://images-na.ssl-images-amazon.com/images/I/81ynAwTEn0L._AC_UL300_SR300,200_.jpg",
};

let tvelvethBook = {
  title: "Things We Never Got Over",
  author: "Lucy Score",
  src: "https://images-na.ssl-images-amazon.com/images/I/71HsLc-TNlL._AC_UL600_SR600,400_.jpg",
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
      <Book
        src={sixthBook.src}
        title={sixthBook.title}
        author={sixthBook.author}
      />
      <Book
        src={seventhBook.src}
        title={seventhBook.title}
        author={seventhBook.author}
      />
      <Book
        src={eightBook.src}
        title={eightBook.title}
        author={eightBook.author}
      />

      <Book
        src={ninthBook.src}
        title={ninthBook.title}
        author={ninthBook.author}
      />
      <Book
        src={tenthBook.src}
        title={tenthBook.title}
        author={tenthBook.author}
      />
      <Book
        src={eleventhBook.src}
        title={eleventhBook.title}
        author={eleventhBook.author}
      />
      <Book
        src={tvelvethBook.src}
        title={tvelvethBook.title}
        author={tvelvethBook.author}
      />
    </section>
  );
}

export default BookList;
