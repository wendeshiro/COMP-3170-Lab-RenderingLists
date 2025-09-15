import styles from "./App.module.css";
import Header from "./components/Header";
import Book from "./components/Book";
import NewBook from "./components/NewBook";
import Footer from "./components/Footer";

export default function App() {
    return (
        <div className={styles.appContainer}>
            <Header />
            <div className={styles.bookList}>
                <NewBook />
                <Book
                    imgSrc="https://itbook.store/img/books/9781484287507.png"
                    imgAlt="Programming for Absolute Beginners"
                    bookLink="https://itbook.store/books/9781484287507"
                    bookTitle="Programming for Absolute Beginners"
                    bookAuthor="Jonathan Bartlett"
                    bookPrice="$21.72 - $39.99"
                />
                <Book
                    imgSrc="https://itbook.store/img/books/9781484292143.png"
                    imgAlt="Expert Performance Indexing in Azure SQL and SQL Server 2022, 4th Edition"
                    bookLink="https://itbook.store/books/9781484292143"
                    bookTitle="Expert Performance Indexing in Azure SQL and SQL Server 2022, 4th Edition"
                    bookAuthor="Edward Pollack, Jason Strate"
                    bookPrice="$54.54 - $83.62"
                />
            </div>
            <Footer />
        </div>
    );
}
