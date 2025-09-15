import styles from "./Book.module.css";

export default function Book({ imgSrc, imgAlt, bookLink, bookTitle, bookAuthor, bookPrice }) {
    return (
        <div className={styles.bookContainer}>
            <a href={bookLink} target="_blank">
                <img src={imgSrc} alt={imgAlt} />
            </a>
            <a className={styles.bookTitle} href={bookLink} target="_blank">
                {bookTitle}
            </a>
            <p className={styles.bookAuthor}>By {bookAuthor}</p>
            <p className={styles.bookPrice}>{bookPrice}</p>
        </div>
    );
}
